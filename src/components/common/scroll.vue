<template>
    <div ref="wrapper" class="list-wrapper" :style="{height:height+'px'}">
        <slot class="wInner"></slot>

        <slot name="pullup"
              :pullUpLoad="pullUpLoad"
              :isPullUpLoad="isPullUpLoad">
            <div class="pullup-wrapper" v-if="pullUpLoad">
                <div class="before-trigger" v-if="!isPullUpLoad">
                    <span>{{pullUpTxt}}</span>
                </div>
                <div class="after-trigger" v-else>
                    <i class="el-icon-loading"></i>
                </div>
            </div>
        </slot>

        <slot name="pulldown"
              :pullDownRefresh="pullDownRefresh"
              :pullDownStyle="pullDownStyle"
              :beforePullDown="beforePullDown"
              :pulling="pulling">
            <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
                <div class="before-trigger" v-if="beforePullDown">
                </div>
                <div class="after-trigger" v-else>
                    <div v-if="pulling" class="loading">
                        <i class="el-icon-loading"></i>
                    </div>
                    <div v-else><span>{{refreshTxt}}</span></div>
                </div>
            </div>
        </slot>


    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: 'scroll',
        data() {
            return {
                height:'',
                beforePullDown: true,
                isRebounding: false,
                isPullingDown: false,
                pulling: false,
                isPullUpLoad: false,
                pullUpDirty: true,
                pullDownStyle: '',
                refreshT:'刷新数据成功',
            }
        },
        created() {
            this.pullDownInitTop = -50
        },
        props: {
            data: {
                type: Array,
                default: function () {
                    return []
                }
            },
            /**
             * 1 滚动的时候会派发scroll事件，会截流。
             * 2 滚动的时候实时派发scroll事件，不会截流。
             * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
             */
            /**
             * 点击列表是否派发click事件
             */
            click: {
                type: Boolean,
                default: true
            },
            /**
             * 是否派发滚动事件
             */
            listenScroll: {
                type: Boolean,
                default: false
            },
            listenBeforeScroll: {
                type: Boolean,
                default: false
            },
            direction: {
                type: String,
                default: 'vertical'
            },
            scrollbar: {
                type: null,
                default: false
            },
            pullDownRefresh: {
                type: null,
                default: false
            },
            /**
             * 列表的数据
             */
            // data: {
            //     type: Array,
            //     default: null
            // },
            /**
             * 是否派发滚动到底部的事件，用于上拉加载
             */
            pullUpLoad: {
                type: null,
                default: false
            },
            startY: {
                type: Number,
                default: 0
            },
            /**
             * 是否派发顶部下拉的事件，用于下拉刷新
             */
            pulldown: {
                type: Boolean,
                default: false
            },
            /**
             * 是否派发列表滚动开始的事件
             */
            beforeScroll: {
                type: Boolean,
                default: false
            },
            /**
             * 当数据更新后，刷新scroll的延时。
             */
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        computed: {
            pullUpTxt() {
                const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || '上拉加载更多';
                const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || '没有更多数据了';

                // const moreTxt = '上拉加载更多';
                // const noMoreTxt = '没有更多数据了';
                return this.pullUpDirty ? moreTxt : noMoreTxt
            },
            refreshTxt() {
                return this.pullDownRefresh && this.pullDownRefresh.txt || '刷新数据成功'
                //return this.refreshT
            }
        },
        mounted() {
            // 保证在DOM渲染完毕后初始化better-scroll
            // setTimeout(() => {
            //     this.initScroll()
            // }, 2000)
            this.initScroll();
        },
        methods: {
            initScroll() {
                this.height = document.body.clientHeight - document.getElementById('mHead').offsetHeight-document.getElementById('foot').offsetHeight;
                console.log(this.height);
                if (!this.$refs.wrapper) {
                    return
                }
                if (this.$refs.list && (this.pullDownRefresh || this.pullUpLoad)) {
                    this.$refs.list.style.minHeight = this.getRect(this.$refs.wrapper).height + 'px'
                }

                let options = {
                    click: this.click,
                    scrollY: true,
                    scrollbar: this.scrollbar,
                    pullDownRefresh: this.pullDownRefresh,
                    pullUpLoad: this.pullUpLoad,
                    startY: this.startY,
                };

                this.scroll = new BScroll(this.$refs.wrapper, options);

                if (this.listenScroll) {
                    this.scroll.on('scroll', (pos) => {
                        this.$emit('scroll', pos)
                    })
                }

                if (this.listenBeforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScrollStart')
                    })
                }

                if (this.pullDownRefresh) {
                    this._initPullDownRefresh()
                }

                if (this.pullUpLoad) {
                    this._initPullUpLoad()
                }
            },
            getRect(el) {
                if (el instanceof window.SVGElement) {
                    let rect = el.getBoundingClientRect()
                    return {
                        top: rect.top,
                        left: rect.left,
                        width: rect.width,
                        height: rect.height
                    }
                } else {
                    return {
                        top: el.offsetTop,
                        left: el.offsetLeft,
                        width: el.offsetWidth,
                        height: el.offsetHeight
                    }
                }
            },
            refresh() {
                // 代理better-scroll的refresh方法
                this.scroll && this.scroll.refresh()
            },
            scrollTo() {
                // 代理better-scroll的scrollTo方法
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {
                // 代理better-scroll的scrollToElement方法
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            },
            clickItem(e, item) {
                this.$emit('click', item)
            },
            destroy() {
                this.scroll.destroy()
            },
            forceUpdate(dirty) {
                if (this.pullDownRefresh && this.isPullingDown) {
                    this.pulling = false;
                    this._reboundPullDown().then(() => {
                        this._afterPullDown()
                    })
                } else if (this.pullUpLoad && this.isPullUpLoad) {
                    this.isPullUpLoad = false;
                    this.scroll.finishPullUp(false);
                    this.pullUpDirty = dirty;
                    this.refresh();
                } else {
                    this.refresh()
                }
            },
            _initPullDownRefresh() {
                this.scroll.on('pullingDown', () => {
                    this.beforePullDown = false
                    this.isPullingDown = true
                    this.pulling = true
                    this.$emit('pullingDown')
                })

                this.scroll.on('scroll', (pos) => {
                    if (this.beforePullDown) {
                        this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
                    }

                    if (this.isRebounding) {
                        this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
                    }
                })
            },
            _initPullUpLoad() {
                this.scroll.on('pullingUp', () => {
                    this.isPullUpLoad = true
                    this.$emit('pullingUp')
                })
            },
            _reboundPullDown() {
                const {stopTime = 600} = this.pullDownRefresh
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.isRebounding = true
                        this.scroll.finishPullDown()
                        this.isPullingDown = false
                        resolve()
                    }, stopTime)
                })
            },
            _afterPullDown() {
                setTimeout(() => {
                    this.pullDownStyle = `top:${this.pullDownInitTop}px`
                    this.beforePullDown = true
                    this.isRebounding = false
                    this.refresh()
                }, this.scroll.options.bounceTime)
            }
        },
        watch: {
            // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
            data() {
                setTimeout(() => {
                    this.forceUpdate(true)
                }, this.refreshDelay)
            }
        }
    }

</script>

<style lang="scss">
    @import '../../style/mixin';
    .list-wrapper{
        /*height: px2rem(1060);*/
        background: #fff;
        position: relative;
        padding:0 px2rem(20);
    }
    .wInner{
        height: px2rem(1140);
        width:px2rem(750);
    }
    .pulldown-wrapper{
        position: absolute;
        width: 100%;
        left: 0;
        display: flex;
        justify-content:center;
        align-items:center;
        transition: all;
    }
    .pullup-wrapper{
        z-index:1000;
        position: absolute;
        bottom:0;
        left:0;
        width: px2rem(750);
        justify-content:center;
        align-items:center;
        text-align: center;
        background-color: #f2f2f2;
    }


</style>
