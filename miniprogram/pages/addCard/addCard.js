// miniprogram/pages/addCard/addCard.js
wx.cloud.init();
const db = wx.cloud.database();
const Cards = db.collection('C');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: [
      "red",
      "purple",
      "black",
      "yellow"
    ],
    colorIndex:0,
    text:"",
    barColor:[0,0,0],
    barColor2:[0,0,0]
  },

  formSubmit: function (e) {
    const d = e.detail.value;
    const colorid = d.colorid;
    console.log(colorid)
    const colortype = this.data.color[colorid];
    

    Cards.add({
      data : {
        event: {
          name: d.name,
        },
        emotion: {
          color: colortype,
        },
        poem: {
          text: d.text,
        }
      },
      success(res) {
        console.log("submit success");
        wx.showToast({
          title:'成功加入卡包'
        })
      },
      fail(res) {
        console.error;
      }
    })
  },

  colorChanged: function (e) {
    this.setData({
      colorIndex:e.detail.value
    })
  },

  textChanged: function (e) {
      this.setData({
        barColor:[Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)],
        barColor2:[Math.abs(this.data.barColor[0]-20),Math.round(this.data.barColor[1]/2),Math.abs(this.data.barColor[2]-20)]
      })
      console.log(e.detail.value)
      console.log(this.data.barColor)
  },
  
  
  onLoad: function (options) {
    // wx.setInterval(this.textChanged(e), 20);
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