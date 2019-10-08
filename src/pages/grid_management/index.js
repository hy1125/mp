import { showToast } from '@/plugins';
import api from '@/api';
import apiconf from '../../api/apiconf.js';
import HeaderBar from '@/components/header_bar.vue';

export default {
  data() {
    return {
      gridTitle: "深能妈湾一级网格",
      gridNumber: "001",
      gridLevel: "",
      tableTitle1: "网格员",
      tableTitle2: "管辖网格",
      tableTitle3: "网格职责",
      introduction: "",
      list: [
        {
          name: '未带安全帽',
          operator1: "",
          operator2: "",
          id: '汽机房连廊入口'
        },
        {
          name: '翻越皮带',
          operator1: "",
          operator2: "",
          id: '1车间'
        },
      ],
      operatorList: [
        {
          name: '张三',
          number: '13499990000'
        },
        {
          name: '张三8',
          number: '13499990000'
        },
      ]
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
    initGridDada(id) {
      const params = {
        id: id || "",
      }
      wx.showLoading({
        title: '加载中',
      });
      api.getGradeList(params).then(res => {
        console.log("获取网格信息", res)
        wx.hideLoading()
        // this.users = []
        this.gridTitle = res.data.superior.name;
        this.gridNumber = res.data.superior.number;
        this.introduction = res.data.superior.introduction;
        this.operatorList[0].name = res.data.superior.operator1;
        this.operatorList[0].number = res.data.superior.phone1;
        this.operatorList[1].name = res.data.superior.operator2;
        this.operatorList[1].number = res.data.superior.phone2;
        res.data.subordinate.forEach((item, index) => {
          this.list[index].name = item.name;
          this.list[index].id = item.number;
          this.list[index].operator1 = item.operator1;
          this.list[index].operator2 = item.operator2;
        })
      })
    },
    handleClick() {
      let param = "";
      switch (this.gridLevel) {
        case "1":
          param = "?id=2";
          break;
        case "2":
          param = "?id=3";
          break;
        case "3":
          param = "?area_id=3";
          break;
        default:
          break;
      }
      wx.navigateTo({
        url: "../../pages/grid_management/main" + param
      })
    }
  },
  onLoad(option) {
    console.log("======"+option.id);
    this.gridLevel = option.id || "1";
    this.initGridDada(option.id);
  },
}