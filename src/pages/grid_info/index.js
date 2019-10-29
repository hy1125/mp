import { showToast } from '@/plugins';
import api from '@/api';
import apiconf from '../../api/apiconf.js';
import HeaderBar from '@/components/header_bar.vue';

export default {
  data() {
    return {
      statusBarHeight: HeaderBar.getStatusBarHeight(),
      gridTitle: "深能妈湾一级网格",
      gridNumber: "001",
      gridLevel: ""
    }
  },
  components: {
    HeaderBar,
  },
  onPullDownRefresh() {
    this.getTabDatas();
  },
  methods: {
    handleClickHeader() {
      wx.navigateBack({
        delta: 1
      })
    },
    newWorkOrder() {
      wx.navigateTo({
        url: "../../pages/report_hidden_danger/main?id=" + this.gridLevel
      })
    },
    initGridDada(id) {
      const params = {
        id: id || "1",
      }
      wx.showLoading({
        title: '加载中',
      });
      api.getGridInfo(params).then(res => {
        console.log("获取网格信息", res)
        wx.hideLoading()
        this.gridTitle = res.data.list.area_3;
        this.gridNumber = res.data.list.number;
      })
    },
  },
  onLoad(option) {
    console.log("======"+option.id);
    this.gridLevel = option.id || "1";
    this.initGridDada(option.id);
  },
}