Page({
  data: {
    url: ''
  },
  onLoad(param) {
    console.log(decodeURIComponent(param.url))
    this.setData({
      url: decodeURIComponent(param.url),
    })
  },
  // getEmployee(param) {
  //   console.log(decodeURIComponent(param.url));
  //   wx.miniProgram.navigateTo({
  //     url: decodeURIComponent(param.url)
  //   })
  // }
})