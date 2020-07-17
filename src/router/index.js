import App from '../App' //PC端
import mApp from '../mApp' //移动端
import { setStore, getStore } from '../config/mUtils'
//PC端
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const aboutus = r => require.ensure([], () => r(require('../page/introduce/aboutus')), 'aboutus');
const research = r => require.ensure([], () => r(require('../page/introduce/research')), 'research');
const scinews = r => require.ensure([], () => r(require('../page/news/scinews')), 'scinews');
const exchange = r => require.ensure([], () => r(require('../page/news/exchange')), 'exchange');
const industry = r => require.ensure([], () => r(require('../page/news/industry')), 'industry');
const activity = r => require.ensure([], () => r(require('../page/news/activity')), 'activity');
const higher = r => require.ensure([], () => r(require('../page/team/higher')), 'higher');
const medium = r => require.ensure([], () => r(require('../page/team/medium')), 'medium');
const primary = r => require.ensure([], () => r(require('../page/team/primary')), 'primary');
const manage = r => require.ensure([], () => r(require('../page/team/manage')), 'manage');
const student = r => require.ensure([], () => r(require('../page/team/student')), 'student');
const project = r => require.ensure([], () => r(require('../page/science/project')), 'project');
const paper = r => require.ensure([], () => r(require('../page/science/paper')), 'paper');
const patent = r => require.ensure([], () => r(require('../page/science/patent')), 'patent');
const technology = r => require.ensure([], () => r(require('../page/science/technology')), 'technology');
const award = r => require.ensure([], () => r(require('../page/science/award')), 'award');
const supporter = r => require.ensure([], () => r(require('../page/platform/supporter')), 'supporter');
const lab = r => require.ensure([], () => r(require('../page/platform/lab')), 'lab');
const equipment = r => require.ensure([], () => r(require('../page/platform/equipment')), 'equipment');
const recruit = r => require.ensure([], () => r(require('../page/recruit/index')), 'recruit');
const contactus = r => require.ensure([], () => r(require('../page/contactus/index')), 'contactus');


//移动端
const mHome = r => require.ensure([], () => r(require('../mpage/home/home')), 'mHome');
const mAboutus = r => require.ensure([], () => r(require('../mpage/introduce/aboutus')), 'mAboutus');
const mResearch = r => require.ensure([], () => r(require('../mpage/introduce/research')), 'mResearch');
const mScinews = r => require.ensure([], () => r(require('../mpage/news/scinews')), 'mScinews');
const mExchange = r => require.ensure([], () => r(require('../mpage/news/exchange')), 'mExchange');
const mIndustry = r => require.ensure([], () => r(require('../mpage/news/industry')), 'mIndustry');
const mActivity = r => require.ensure([], () => r(require('../mpage/news/activity')), 'mActivity');
const mHigher = r => require.ensure([], () => r(require('../mpage/team/higher')), 'mHigher');
const mMedium = r => require.ensure([], () => r(require('../mpage/team/medium')), 'mMedium');
const mPrimary = r => require.ensure([], () => r(require('../mpage/team/primary')), 'mPrimary');
const mManage = r => require.ensure([], () => r(require('../mpage/team/manage')), 'mManage');
const mStudent = r => require.ensure([], () => r(require('../mpage/team/student')), 'mStudent');
const mProject = r => require.ensure([], () => r(require('../mpage/science/project')), 'mProject');
const mPaper = r => require.ensure([], () => r(require('../mpage/science/paper')), 'mPaper');
const mPatent = r => require.ensure([], () => r(require('../mpage/science/patent')), 'mPatent');
const mTechnology = r => require.ensure([], () => r(require('../mpage/science/technology')), 'mTechnology');
const mAward = r => require.ensure([], () => r(require('../mpage/science/award')), 'mAward');
const mSupporter = r => require.ensure([], () => r(require('../mpage/platform/supporter')), 'mSupporter');
const mLab = r => require.ensure([], () => r(require('../mpage/platform/lab')), 'mLab');
const mEquipment = r => require.ensure([], () => r(require('../mpage/platform/equipment')), 'mEquipment');
const mRecruit = r => require.ensure([], () => r(require('../mpage/recruit/index')), 'mRecruit');
const mContactus = r => require.ensure([], () => r(require('../mpage/contactus/index')), 'mContactus');

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
            path: '/introduce/aboutus',
            name: 'aboutus',
            component: aboutus
        },
        {
            path: '/introduce/research',
            name: 'research',
            component: research
        },
        {
            path: '/news/scinews',
            name: 'scinews',
            component: scinews
        },
        {
            path: '/news/exchange',
            name: 'exchange',
            component: exchange
        },
        {
            path: '/news/industry',
            name: 'industry',
            component: industry
        },
        {
            path: '/news/activity',
            name: 'activity',
            component: activity
        },
        {
            path: '/team/higher',
            name: 'higher',
            component: higher
        },
        {
            path: '/team/medium',
            name: 'medium',
            component: medium
        },
        {
            path: '/team/primary',
            name: 'primary',
            component: primary
        },
        {
            path: '/team/manage',
            name: 'manage',
            component: manage
        },
        {
            path: '/team/student',
            name: 'student',
            component: student
        },
        {
            path: '/science/project',
            name: 'project',
            component: project
        },
        {
            path: '/science/paper',
            name: 'paper',
            component: paper
        },
        {
            path: '/science/patent',
            name: 'patent',
            component: patent
        },
        {
            path: '/science/technology',
            name: 'technology',
            component: technology
        },
        {
            path: '/science/award',
            name: 'award',
            component: award
        },
        {
            path: '/platform/supporter',
            name: 'supporter',
            component: supporter
        },
        {
            path: '/platform/lab',
            name: 'lab',
            component: lab
        },
        {
            path: '/platform/equipment',
            name: 'equipment',
            component: equipment
        },
        {
            path: '/recruit/index',
            name: 'recruit',
            component: recruit
        },
        {
            path: '/contactus/index',
            name: 'contactus',
            component: contactus
        },
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
            path: '/introduce/aboutus',
            name: 'mAboutus',
            component: mAboutus
        },
        {
            path: '/introduce/research',
            name: 'mResearch',
            component: mResearch
        },
        {
            path: '/news/scinews',
            name: 'mScinews',
            component: mScinews
        },
        {
            path: '/news/exchange',
            name: 'mExchange',
            component: mExchange
        },
        {
            path: '/news/industry',
            name: 'mIndustry',
            component: mIndustry
        },
        {
            path: '/news/activity',
            name: 'mActivity',
            component: mActivity
        },
        {
            path: '/team/higher',
            name: 'mHigher',
            component: mHigher
        },
        {
            path: '/team/medium',
            name: 'mMedium',
            component: mMedium
        },
        {
            path: '/team/primary',
            name: 'mPrimary',
            component: mPrimary
        },
        {
            path: '/team/manage',
            name: 'mManage',
            component: mManage
        },
        {
            path: '/team/student',
            name: 'mStudent',
            component: mStudent
        },
        {
            path: '/science/project',
            name: 'mPproject',
            component: mProject
        },
        {
            path: '/science/paper',
            name: 'mPaper',
            component: mPaper
        },
        {
            path: '/science/patent',
            name: 'mPatent',
            component: mPatent
        },
        {
            path: '/science/technology',
            name: 'mTechnology',
            component: mTechnology
        },
        {
            path: '/science/award',
            name: 'mAward',
            component: mAward
        },
        {
            path: '/platform/supporter',
            name: 'mSupporter',
            component: mSupporter
        },
        {
            path: '/platform/lab',
            name: 'mLab',
            component: mLab
        },
        {
            path: '/platform/equipment',
            name: 'mEquipment',
            component: mEquipment
        },
        {
            path: '/recruit/index',
            name: 'mRecruit',
            component: mRecruit
        },
        {
            path: '/contactus/index',
            name: 'mContactus',
            component: mContactus
        },
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
    setStore('isPc', 1);
} else {
    use = wap;
    setStore('isPc', 0);
}

export default use;