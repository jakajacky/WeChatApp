var app = getApp()
var manager = require('commans/commans.js')
const API_URL = 'https://api.douban.com/v2/movie/in_theaters?count=3'
Page({
  data:{
    text:"结合网络请求的轮播图示例"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavitionBarTitle = "轮播图"
    console.log("wx-swiper页面初始化")

    // 加载网络图片
    manager.fetchApi(API_URL,(err,data) => {
        this.setData({lists:data.subjects, loading:false})
        console.log('result:'+data.subjects)
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  // swiper的change事件，默认传过来一个event，里面的detail包含current
  swiperchange:function(e) {
    console.log(e.detail["current"])
  }

})