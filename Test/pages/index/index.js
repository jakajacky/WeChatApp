//index.js
//获取应用实例
var app = getApp()
type = [
        'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ],

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('输出：onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  onShow:function(){
    // 页面显示
    console.log('页面显示')
  },

  widgetsToggle : function (e) {
      console.log("toggle?????")
      var id = e.currentTarget.id, data = {};
      for (var i = 0, len = type.length; i < len; ++i) {
          data[type[i] + 'Show'] = false;
      }
      console.log(id)
      data[id + 'Show'] = !this.data[id + 'Show'];
      data[id + 'Back'] = !this.data[id + 'Back'];
      data[id] = id;
      this.setData(data)
  }

})
