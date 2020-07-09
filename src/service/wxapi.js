import wx from 'weixin-js-sdk'
import Axios from 'axios'

const wxApi = {
    /**
     * [wxRegister 微信Api初始化]
     * @param  {Function} callback [ready回调函数]
     */
    wxRegister(data,option) { //data是微信配置信息，option是分享的配置内容
        wx.config({
            debug: false, // 开启调试模式
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
                "onMenuShareTimeline", 
                "onMenuShareAppMessage", 
                'checkJsApi',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wx.ready(function(){
            
           

            // var shareData = {  
            //     title: window.location.title,  
            //     desc: '产学研用金融资源对接服务、工艺开发联营生产、优势产品交易推广及品牌营销，用化学加。',  
            //     link: window.location.href,  
            //     imgUrl: 'http://www.huaxuejia.cn/Public/home/images/logo.jpg'
            // };  
            var shareData = {  
                title: option.title,  
                desc: option.desc,  
                link: option.link,  
                imgUrl: option.imgUrl
            };  
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
            wx.onMenuShareQQ(shareData);
            wx.onMenuShareWeibo(shareData);
        })
    }
}
export default wxApi