import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';

export default {
    data() {
        return {
            op: "",
            info: {
                title: "文件标题",
                img: "",
                img2: ""
            },
            content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内。"
        }
    },
    components: {
        HeaderBar,
    },
    onPullDownRefresh() {
        this.getTabDatas();
    },
    methods: {
        getDeviceInfo() {
            const params = {
                type: 2,
                pid: this.op.pid,
                id: this.op.id,
            };
            api.getDeviceInfo(params).then(res => {
                console.log("查询检修详情",res)
                res.data.img2 = "http://47.112.104.43" + res.data.img
                res.data.img = apiconf.domainIp + res.data.img
                this.info = res.data
            })
        },
        imgError() {
            this.info.img = this.info.img2
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleClick(path) {
            wx.navigateTo({
                url: path
            })
        }
    },
    onLoad(op) {
        this.op = op
        this.getDeviceInfo()
    },
}