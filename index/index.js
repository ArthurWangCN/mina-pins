
Page({
  data: {
    tags: [
      { id: '1', name: '标签一'},
      { id: '2', name: '标签二'},
      { id: '3', name: '标签三'},
      { id: '4', name: '标签四'},
      { id: '5', name: '标签五'},
    ],
    tagList: ['标签一', '标签二', '标签三', '标签四', '标签五'],
    pins: [
      { id: '1', title: '收藏一', url: 'https://www.baidu.com', tagId: '1', tagName: '标签一'},
      { id: '2', title: '收藏一', url: 'https://www.baidu.com', tagId: '1', tagName: '标签一'},
      { id: '3', title: '收藏一', url: 'https://www.baidu.com', tagId: '1', tagName: '标签三'},
      { id: '4', title: '收藏一', url: 'https://www.baidu.com', tagId: '1', tagName: '标签一'},
      { id: '5', title: '收藏一', url: 'https://www.baidu.com', tagId: '1', tagName: '标签一'},
    ],
    dialogShow: false,
    buttons: [
      {text: '取消', extClass:'cancel'},
      {text: '确定', extClass:'confirm'}
    ],
    array: ['美国', '中国', '巴西', '日本'],
    tagIndex: 0,
    curPin: {
      id: '',
      title: '',
      url: '',
    }
  },
  // 点击复制
  handlePinTap(e) {
    let curId = e.currentTarget.dataset.id;
    let curItem = this.data.pins.find(item => item.id === curId);
    wx.setClipboardData({
      data: curItem.url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({ title: '复制成功' })
          }
        })
      }
    })
  },
  // 长按编辑
  handlePinPress(e) {
    let curId = e.currentTarget.dataset.id;
    let curItem = this.data.pins.find(item => item.id === curId);
    let tagIndex = this.data.tagList.findIndex(item => item === curItem.tagName);
    this.setData({
      dialogShow: true,
      curPin: {
        id: curItem.id,
        title: curItem.title,
        url: curItem.url,
        tagName: '标签二'
      },
      tagIndex
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  tapDialogButton(e) {
    console.log(e);
    if (e.detail.item.extClass === 'confirm') {

    }  else {
      this.setData({
          dialogShow: false,
      })
    }
  },
})