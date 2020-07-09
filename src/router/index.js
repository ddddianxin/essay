import App from '../App' //PC端
import mApp from '../mApp' //移动端
//PC端
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');

//移动端
const mHome = r => require.ensure([], () => r(require('../mpage/home/home')), 'mHome');


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