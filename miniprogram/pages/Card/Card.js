// miniprogram/pages/Card/Card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards:[
      {
        name:"阿卡丽",
        color:"red",
        poem:"123"
      },
      {
        name:"亲亲",
        color:"yellow",
        poem:"123"
      },
      {
        name:"热干面",
        color:"purple",
        poem:"123"
      },
      {
        name:"送别",
        color:"black",
        poem:"123"
      },
    ]
  },

  addCard: function () {
    wx.navigateTo({
      url: '../addCard/addCard',
      success: function (){
        wx.showToast({
          title: '来吧！喵喵！'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})