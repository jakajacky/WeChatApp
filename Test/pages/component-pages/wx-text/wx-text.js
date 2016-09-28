var app = getApp()
var lines = ["A line text"]
Page({
  data:{
    text:" A line text",
    line: lines
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  // 增加
  add:function(e) {
      lines.push("A line text")
      this.setData({text: lines.join("\n")})
      console.log(lines.join("\n"))
  },
  // 删除
  remove:function(e) {
      lines.pop()
      this.setData({text: lines.join("\n")})
  }


})