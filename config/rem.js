function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod","Blackberry"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

if(IsPC()){
    //网页端
}else{
    //移动端
    !(function() {
        var docElem = document.documentElement,
            metaElem = document.querySelector('meta[name="viewport"]'),
            dpr = window.devicePixelRatio || 1,
            // 将页面分为10块
            blocks = 10,
            // 需要限制的最小宽度
            defaultMinWidth = 320,
            // 需要限制的最大宽度
            defaultMaxWidth = 600,
            // 计算的基准值
            calcMaxWidth = 9999999;

        if (!metaElem) {
            metaElem = initMetaViewport();
        }

        if (metaElem.getAttribute('data-content-max') !== null) {
            calcMaxWidth = defaultMaxWidth;
        }

        // 确保meta[name="viewport"]存在
        function initMetaViewport() {
            var meta = document.createElement('meta');

            meta.setAttribute('name', 'viewport');
            meta.setAttribute('content', 'width=device-width,initial-scale=1,user-scalable=no,width=750,maximum-scale='+window.screen.width/750);
            //'width=device-width,initial-scale=1,user-scalable=no'
            document.head.appendChild(meta);

            return meta;
        }

        // 大部分dpr为2以下的安卓机型不识别scale，需设置不缩放
        if (navigator.appVersion.match(/android/gi) && dpr <= 2) {
            dpr = 1;
        }

        // 企业QQ设置了scale后，不能完全识别scale（此时clientWidth未收到缩放的影响而翻倍），需设置不缩放
        if (navigator.appVersion.match(/qq\//gi) && docElem.clientWidth <= 360) {
            dpr = 1;
            setScale(dpr);
        }

        docElem.setAttribute('data-dpr', dpr);

        // 设置缩放
        function setScale(dpr) {
            metaElem.setAttribute('content', 'initial-scale=' + 1 / dpr + ',maximum-scale=' + 1 / dpr + ',minimum-scale=' + 1 / dpr + ',user-scalable=no');
        }

        // 设置docElem字体大小
        function setFontSize() {
            var clientWidth = docElem.clientWidth;

            // console.log("当前窗口宽度："+clientWidth);
            // console.log("默认最小宽度："+defaultMinWidth);

            clientWidth = Math.max(clientWidth, defaultMinWidth);
            // console.log(dpr);
            // console.log("取最大值："+clientWidth);
            //
            // console.log("-------------------------");
            //
            // console.log("计算的基准值："+calcMaxWidth);
            // console.log("默认最大宽度："+defaultMaxWidth);

            // 调整计算基准值
            if (calcMaxWidth === defaultMaxWidth) {
                clientWidth = Math.min(clientWidth, defaultMaxWidth );
                // console.log("取值:"+clientWidth );
            }

            if(clientWidth>defaultMaxWidth){
                clientWidth = Math.min(clientWidth, defaultMaxWidth );
            }

            // console.log("校准宽度："+clientWidth);
            // console.log("分割："+blocks);

            docElem.style.fontSize = clientWidth / blocks + 'px';
            // console.log(docElem.style.fontSize);
        }

        setFontSize();

        window.addEventListener(window.orientationchange ? 'orientationchange' : 'resize', setFontSize, false);
    })();

}


