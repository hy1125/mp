import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            list: [
                {
                    name: '摄像头编码',
                    location: 'A00888',
                },
                {
                    name: '预警时间',
                    location: '2019/01/01  19:00:11',
                },
                {
                    name: '预警位置',
                    location: '锅炉房',
                },
                {
                    name: '监测类型',
                    location: '未带安全帽',
                },
                {
                    name: '预警截图',
                    location: '1车间',
                },
            ]
        }
    },
    components: {
        HeaderBar,
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
    },
    methods: {
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        initiateData(id){
            const data = {
                id: id
            }
            wx.showLoading({
                title: '加载中',
            });
            api.getVidedetails(data).then(res => {
                console.log("getVidedetails发起成功", res)
                wx.hideLoading();
                this.list[0].location = res.data.cid;
                this.list[1].location = res.data.time;
                this.list[2].location = res.data.addree;
                this.list[3].location = res.data.name;
                this.list[4].location = apiconf.domainIp + res.data.pic_path;
            })
        }
    },
    onLoad(op) {
        this.initiateData(op.id);
    },
}