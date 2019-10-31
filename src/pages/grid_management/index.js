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
      gridLevel: "",
      tableTitle1: "网格员",
      tableTitle2: "网格员列表",
      tableTitle3: "网格职责",
      introduction: "",
      list: [
        {
          name: '未带安全帽',
          operator1: "",
          operator2: "",
          number: '',
          id: ''
        },
        {
          name: '翻越皮带',
          operator1: "",
          operator2: "",
          number: '',
          id: ''
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
      // wx.navigateBack({
      //   delta: 1
      // })
      wx.navigateTo({
        url: "../../pages/home/main"
      })
    },
    initGridData(id) {
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
        this.introduction = res.data.superior.introduction;
        this.gridLevel = res.data.superior.grade_level_id;
        // this.gridNumber = res.data.superior.number;
        // this.operatorList[0].name = res.data.superior.operator1;
        // this.operatorList[0].number = res.data.superior.phone1;
        // this.operatorList[1].name = res.data.superior.operator2;
        // this.operatorList[1].number = res.data.superior.phone2;
        this.list = res.data.subordinate;
        // res.data.subordinate.forEach((item, index) => {
        //   this.list[index].name = item.name;
        //   this.list[index].number = item.number;
        //   this.list[index].id = item.id;
        //   this.list[index].operator1 = item.operator1;
        //   this.list[index].operator2 = item.operator2;
        // })
      })
    },
    handleClick(id) {
      if(this.gridLevel == "4"){
        return false;
      }
      wx.navigateTo({
        url: "../../pages/grid_management/main?id=" + id
      })
    }
  },
  onLoad(option) {
    console.log("======"+option.id);
    this.initGridData(option.id);
  },
}