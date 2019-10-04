const App = getApp();
const wxParse = require("../../../wxParse/wxParse.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 文章详情
    detail: null,
    article_id: 0,
    isLike: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取文章详情
    this.getArticleDetail(options.article_id);
    this.data.article_id = options.article_id;
  },

  /**
   * 获取文章详情
   */
  getArticleDetail(article_id) {
    let _this = this;
    App._get('article/detail', {
      article_id
    }, function(result) {
      let detail = result.data.detail;
      // 富文本转码
      if (detail.article_content.length > 0) {
        detail.article_content = detail.article_content
          .replace(/&amp;nbsp;/g, ' ')
          .replace(/&amp;amp;nbsp;/g, ' ')
          .replace(/&nbsp;/g, ' ');
        wxParse.wxParse('content', 'html', detail.article_content, _this, 0);
      }
      _this.setData({
        detail
      });
      _this.setData({
        isLike: detail.isLike,
      });

    });
  },
  like(e) {
    wx.showLoading({
      title: '',
    });
    const _this = this;
    let url = 'article/like';
    if(this.data.isLike) {
      url = 'article/unLike';
    }
    App._post_form(url, {
      article_id: _this.data.article_id,
    }, function (result) {
      _this.setData({
        isLike: !_this.data.isLike,
      });
      wx.hideLoading();
      App.showSuccess(result.data);
    });
  },
  /**
   * 分享当前页面
   */
  onShareAppMessage() {
    // 构建页面参数
    let params = App.getShareUrlParams({
      'article_id': this.data.detail.article_id
    });
    return {
      title: this.data.detail.article_title,
      path: "/pages/article/detail/index?" + params
    };
  },

})