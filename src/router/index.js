import App from '../App' //PC端
import mApp from '../mApp' //移动端
//PC端
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const team = r => require.ensure([], () => r(require('../page/team/index')), 'team');
const news = r => require.ensure([], () => r(require('../page/news/index')), 'news');
const experiment = r => require.ensure([], () => r(require('../page/experiment/index')), 'experiment');
const centerNews = r => require.ensure([], () => r(require('../page/centerNews/index')), 'centerNews');
const centerIntro = r => require.ensure([], () => r(require('../page/centerIntro/index')), 'centerIntro');
const research = r => require.ensure([], () => r(require('../page/research/index')), 'research');
const sciExchange = r => require.ensure([], () => r(require('../page/sciExchange/index')), 'sciExchange');


//移动端
const mHome = r => require.ensure([], () => r(require('../mpage/home/home')), 'mHome');
const mTeam = r => require.ensure([], () => r(require('../mpage/team/index')), 'mTeam');
const mNews = r => require.ensure([], () => r(require('../mpage/news/index')), 'mNews');
const mExperiment = r => require.ensure([], () => r(require('../mpage/experiment/index')), 'mExperiment');
const mCenterNews = r => require.ensure([], () => r(require('../mpage/centerNews/index')), 'mEnterNews');
const mCenterIntro = r => require.ensure([], () => r(require('../mpage/centerIntro/index')), 'mCenterIntro');
const mSciExchange = r => require.ensure([], () => r(require('../mpage/sciExchange/index')), 'mSciExchange');


var pc = [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home' ///home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/team/index',
            name: 'team',
            component: team
        },
        {
            path: '/news/index',
            name: 'news',
            component: news
        },
        {
            path: '/experiment/index',
            name: 'experiment',
            component: experiment
        },
        {
            path: '/centerNews/index',
            name: 'centerNews',
            component: centerNews
        },
        {
            path: '/centerIntro/index',
            name: 'centerIntro',
            component: centerIntro
        },
        {
            path: '/research/index',
            name: 'research',
            component: research
        },
        {
            path: '/sciExchange/index',
            name: 'sciExchange',
            component: sciExchange
        }
    ]
}];

var wap = [{
    path: '/',
    component: mApp, //顶层路由，对应index.html
    children: [
        //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home' ///home
        },
        {
            path: '/home',
            name: 'mHome',
            component: mHome
        },
        {
            path: '/team/index',
            name: 'mTeam',
            component: mTeam
        },
        {
            path: '/news/index',
            name: 'mNews',
            component: mNews
        },
        {
            path: '/experiment/index',
            name: 'mExperiment',
            component: mExperiment
        },
        {
            path: '/centerNews/index',
            name: 'mCenterNews',
            component: mCenterNews
        },
        {
            path: '/centerIntro/index',
            name: 'mCenterIntro',
            component: mCenterIntro
        },
        {
            path: '/sciExchange/index',
            name: 'mSciExchange',
            component: mSciExchange
        }
    ]
}];

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "Blackberry"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
var use;
if (IsPC()) {
    use = pc;
} else {
    use = wap;
}

export default use;