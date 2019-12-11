import { showToast } from '@/plugins';
import api from '@/api';
import HeaderBar from '@/components/header_bar.vue';
import SearchBar from '@/components/search_bar.vue';
import DoubleList from '@/components/double_list.vue';
import Loading from '@/components/loading.vue';
import NoData from '@/components/no_data.vue';
import { qualificationFilter } from '@/filters';

const count = 20;
export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            datas: [],
            page: 1,
            pageCount: 1,
            loadMore: false,
            needLoadMore: true,
            data: {
                multiArray: [['筛选职业','筛选单位'], ['']],
                multiIndex: [0, 0],
            },
            objectList: [],         //职业
            unitList: [],           //单位
            form: {
                staffName: "",          //员工姓名
                staffNumber: "",        //员工工号
                company: "",            //外协单位
                qualification: "",      //外协职业
            }
            
        }
    },
    components: {
        SearchBar,
        DoubleList,
        HeaderBar,
        Loading,
        NoData
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    onReachBottom() {
        // if (this.loadMore) return;
        // this.$nextTick(() => {
        //     this.loadMore = true;
        //     this.loadMoreDatas();
        // });
    },
    methods: {
        searchStaff(e) {
            // console.log("搜索的字",e.mp.detail)
            // this.form.staffName = ""
            // this.form.staffNumber = ""
            // if(/.*[\u4e00-\u9fa5]+.*$/.test(e.mp.detail.value)){ 
            //     this.form.staffName = e.mp.detail.value
            // } else{
            //     this.form.staffNumber = e.mp.detail.value
            // }
            this.form.company = ""
            this.form.company = e.mp.detail.value
            this.getDataList()
        },
        getDataList() {
            let params = {}
            if(this.form.staffName) {
                params.name = this.form.staffName
            }
            if(this.form.staffNumber) {
                params.number = this.form.staffNumber
            }
            if(this.form.qualification) {
                params.qualification = this.form.qualification
            }
            if(this.form.company) {
                params.company = this.form.company
            }
            api.getCooperatorList(params).then(res=>{
                console.log("获取外协员工列表",res)
                this.datas = res.data
            })
        },
        bindMultiPickerChange(e) {
            this.form.qualification = ""
            this.form.company = ""
            console.log('picker发送选择改变，携带值为', e.mp.detail.value)
            this.data.multiIndex = [...e.mp.detail.value]
            if(e.mp.detail.value[0] == 0) {
                this.form.qualification = this.objectList[e.mp.detail.value[1]]
            }
            if(e.mp.detail.value[0] == 1) {
                this.form.company = this.unitList[e.mp.detail.value[1]]
            }
            this.getDataList()
        },
        bindMultiPickerColumnChange(e) {
            console.log('修改的列为', e.mp.detail.column, '，值为', e.mp.detail.value)
            let data = {
              multiArray: this.data.multiArray,
              multiIndex: this.data.multiIndex
            }
            data.multiIndex[e.mp.detail.column] = e.mp.detail.value
            switch (e.mp.detail.column) {
              case 0:
                switch (data.multiIndex[0]) {
                    case 0:
                        data.multiArray[1] = this.objectList
                        break
                    case 1:
                        data.multiArray[1] = this.unitList
                        break
                }
                data.multiIndex[1] = 0
                break
            }
            console.log(data.multiIndex)
            this.data.multiArray = [...data.multiArray]
            this.data.multiIndex = [...data.multiIndex]
          },
        qualificationFilter, 
        handleInput(value) {
            console.log(value);
        },
        goBack() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleClickHeader() {
            wx.showActionSheet({
                itemList: ['筛选部门', '筛选车间'],
                success: function (res) {
                    console.log(res.tapIndex)
                },
                fail: function (res) {
                    console.log(res.errMsg)
                }
            })
        },
        goDetail(item) {
            wx.navigateTo({
                url: `/pages/team_info/main?id=${item.id}`
            })
        },
        getDatas(page) {
            api.getCooperatorInfoDetails().then(res => {
                console.log("获取外协员工列表",res)
                if (res && res.status == 1) {
                    const _datas = this.datas;
                    let datas = [];
                    if (page === 1) {
                        datas = res.data;
                    } else {
                        datas = _datas.concat(res.data);
                    }
                    this.datas = datas;
                    this.loadMore = false;
                    this.objectList = []
                    this.unitList = []
                    res.data.forEach(item => {
                        this.objectList.push(item.qualification)
                        this.unitList.push(item.company)
                    })
                    this.objectList = Array.from(new Set(this.objectList));
                    this.unitList = Array.from(new Set(this.unitList));
                    this.data.multiArray[1] = this.objectList
                }
                
                
            })
        },
        loadMoreDatas() {
            if (this.page === this.pageCount) {
                this.needLoadMore = false
                showToast({ title: `暂无数据`, icon: 'none' });
                return;
            }
            let page = this.page;
            page = page + 1;
            this.getDatas(page);
        },
    },
    onLoad() {
        this.getDatas(1)
    }
}
