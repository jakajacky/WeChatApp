var app = getApp()

Page({
  data:{
    text:"this"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options)
    // 用于.js向.wxml传值：
    this.setData (this.data)
    console.log('wx-view页面初始化'+this.data["text"])
  },
  onReady:function(){
    // 页面渲染完成
    console.log('wx-view页面渲染完成')        
  },
  onShow:function(){
    // 页面显示
    console.log('wx-view页面显示')
  },
  onHide:function(){
    // 页面隐藏
    console.log('wx-view页面隐藏')
  },
  onUnload:function(){
    // 页面关闭
    console.log('wx-view页面关闭')
  }
})