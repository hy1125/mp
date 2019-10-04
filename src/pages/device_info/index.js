import HeaderBar from '@/components/header_bar.vue';
import ProgressCell from '@/components/progress_cell.vue';
import TabBarCell from '@/components/tab_bar_cell.vue';
import ListCell from '@/components/list_cell.vue';
import DoubleList from '@/components/double_list.vue';
import StatusBar from '@/components/status_bar.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';
import { dateFormat, deviceStatusFilter } from '@/filters';

export default {
    data() {
        return {
            id: '',
            pid: '',
            tabDatas: [
                {
                    name: '设备信息',
                    actived: true
                },
                {
                    name: '设备备注',
                    actived: false
                },
                {
                    name: '检修记录',
                    actived: false
                }
            ],
            facilityInfo: [
                {
                    name: '设备名称',
                    content: '锅炉009'
                },
                {
                    name: 'KKS编码',
                    content: 'qqq009'
                },
                {
                    name: '所属部门',
                    content: '运行部 | B车间'
                },
                {
                    name: '投产日期',
                    content: '2018/02/01'
                },
                {
                    name: '安全引导',
                    content: '点击查看',
                    security: '',
                },
            ],
            facilityRemark: [
                {
                    content: '记得检修',
                    time: '2019/02/18  11:58'
                },
            ],
            activedIndex: 0,
            datas: [],
            overhaulDatas: [
                {
                    title: '文件标题',
                    people: '提交人',
                    time: '提交时间'
                },
                {
                    title: '检修记录一',
                    people: '吴大锤',
                    time: '2019/12/31'
                },
            ],
            deviceDetail: {}
        }
    },
    components: {
        HeaderBar,
        ProgressCell,
        TabBarCell,
        ListCell,
        DoubleList,
        StatusBar
    },
    onPullDownRefresh() {
        this.getTabDatas();
    },
    methods: {
        dateFormat,
        deviceStatusFilter,
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleClickFacilityInfo(data) {     //点击设备信息
            console.log("设备信息",data)
            switch (data.name) {
                case '安全引导':
                    wx.navigateTo({
                        // url: `/pages/photo/main?path=${'/static/demo3.png'}`
                        url: `/pages/photo/main?path=${'http://47.112.104.43'}${data.security}`
                    })
                    break;
                default:
                    break;
            }
        },
        handleClickFacilityRemark(data) {
            console.log("设备备注",data)
            wx.navigateTo({
                url: `/pages/device_remark_details/main?id=${data.id}&pid=${data.pid_id}`
            })
            
        },
        handleClickFacilityRecord(data) {
            console.log("检修记录",data)
            wx.navigateTo({
                url: `/pages/device_record_details/main?id=${data.id}&pid=${data.pid_id}`
            })
        },
        handleClickTab(index) {
            for (let [i, item] of this.tabDatas.entries()) {
                if (index === i) {
                    item.actived = true;
                } else {
                    item.actived = false;
                }
            }
            this.activedIndex = index;
        },
        goDetail(path) {
            wx.navigateTo({
                url: path
            })
        },
        addRemark() {
            wx.navigateTo({
                url: `/pages/device_add_remark/main?pid=${this.pid}`
            })
        },
        getDeviceInfo() {
            const params = {
                type: 1,
                pid: this.pid,
                id: this.id
            };
            api.getDeviceInfo(params).then(res => {
                console.log("查询设备信息",res)
                let list = this.facilityInfo
                list[0].content = res.data[0].name
                list[1].content = res.data[0].code
                list[2].content = res.data[0].department
                list[3].content = dateFormat(res.data[0].starttime*1000, 'YYYY-MM-DD')
                list[4].security = res.data[0].security
            })
        },
        getOverhaulList() {
            const params = {
                type: 2,
                pid: this.pid,
                id: ""
            };
            api.getDeviceInfo(params).then(res => {
                console.log("查询检修记录",res)
                this.overhaulDatas = [
                    {
                        title: '文件标题',
                        name: '提交人',
                        time: '提交时间'
                    },
                ]
                res.data.forEach(item => {
                    item.img = apiconf.domainIp + item.img
                    item.time = dateFormat(item.time*1000, 'YYYY-MM-DD')
                    this.overhaulDatas.push(item)
                });
            })
        },
        getRecordList() {
            const params = {
                type: 3,
                pid: this.pid,
                id: "",
                name: ""
            };
            api.getDeviceInfo(params).then(res => {
                console.log("查询设备备注",res)
                res.data.forEach(item => {
                    item.time = dateFormat(item.time*1000, 'YYYY-MM-DD')
                });
                this.facilityRemark = res.data
                
            })
        },
        getTabDatas() {
            this.getOverhaulList();
            this.getRecordList()
        },
        goJXDetail(item) {
            wx.setStorageSync('jxInfo', item);
            const url = `/pages/jx_info/main?id=${item.overhaulId}`;
            wx.navigateTo({
                url: url
            })
        }
    },
    onLoad(op) {
        this.id = op.id;
        this.pid = op.pid;
        this.getDeviceInfo();
        this.getTabDatas();
    },
    onShow() {
        const addYH = wx.getStorageSync('addYH');
        if (addYH) {
            wx.removeStorageSync('addYH');
        }
    }
}