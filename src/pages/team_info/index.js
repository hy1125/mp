import HeaderBar from '@/components/header_bar.vue';
import ListCell from '@/components/list_cell.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';
import { qualificationFilter, dateFormat } from '@/filters';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            ipconfig: apiconf.domainIp,
            teamDetail: {
                name: "杨宇凡"
            },
            keepDetail: [
                {
                    time: "2018/11/11  00:00",
                    place: "北门",
                    state: "入闸"
                },
                {
                    time: "2018/11/11  00:00",
                    place: "北门",
                    state: "出闸"
                }
            ]
        }
    },
    components: {
        HeaderBar,
        ListCell
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    methods: {
        qualificationFilter,
        dateFormat,
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        getCooperatorInfo() {
            const params = {
                id: this.id
            };
            api.getCooperatorInfoDetails(params).then(res => {
                console.log("获取外协员工的详细信息",res)
                this.teamDetail = res.data
                this.teamDetail.photos2 = "http://47.112.104.43"  + this.teamDetail.photos
                this.teamDetail.photos = this.ipconfig + this.teamDetail.photo
            })
        },
        imgError() {
            this.teamDetail.photos = '/static/avatar.png'
        }
    },
    onLoad(op) {
        this.id = op.id;
        this.getCooperatorInfo();
    },
}