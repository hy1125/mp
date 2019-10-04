import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';
import { dateFormat } from '@/filters';

export default {
    data() {
        return {
            id: "",
            ipconfig: apiconf.domainIp,
            img2: "",
            list: [
                {
                    name: '存在的隐患',
                    location: '天然气主管老化',
                },
                {
                    name: '图片',
                    location: '2019/01/01  19:00:11',
                },
                {
                    name: '责任部门',
                    location: '电气部',
                },
                {
                    name: '上报时间',
                    location: '2018/3/3   23:12',
                },
                {
                    name: '上报人',
                    location: '李大锤',
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
        getHiddenDangerDetails() {
            const data = {
                type: 1,
                id: this.id
            }
            api.getHiddenDangerDetails(data).then(res => {
                console.log("获取隐患详情",res)
                let list = this.list
                list[0].location = res.info.danger_text
                list[1].location = this.ipconfig + res.info.danger_img
                // this.img2 = "http://47.112.104.43" + res.info.danger_img
                list[2].location = res.info.department
                list[3].location = dateFormat(res.info.danger_time*1000, 'YYYY-MM-DD')
                list[4].location = res.info.name
            })
        },
        imgError() {
            // this.list[1].location = this.img2
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleClick(path) {
            wx.navigateTo({
                url: `${path}?id=${this.id}`
            })
        }
    },
    onLoad(op) {
        this.id = op.id
        this.getHiddenDangerDetails()
    },
}