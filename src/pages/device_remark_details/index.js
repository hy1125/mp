import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';
import { dateFormat } from '@/filters';

export default {
    data() {
        return {
            op: "",
            list: [
                {
                    name: '备注时间',
                    location: '2019/01/09  19:00',
                },
                {
                    name: '备注人',
                    location: '李大锤',
                },
                {
                    name: '备注内容',
                    location: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',
                },
                {
                    name: '备注图片',
                    location: '',
                },
            ],
        }
    },
    components: {
        HeaderBar,
    },
    onPullDownRefresh() {
        this.getTabDatas();
    },
    methods: {
        dateFormat,
        getDeviceInfo() {
            const params = {
                type: 3,
                pid: this.op.pid,
                id: this.op.id,
                name: ""
            };
            api.getDeviceInfo(params).then(res => {
                console.log("查询设备备注详情",res)
                let list = this.list
                list[0].location = dateFormat(res.data.time*1000, 'YYYY-MM-DD')
                list[1].location = res.data.name
                list[2].location = res.data.content
                list[3].location = apiconf.domainIp + res.data.img
            })
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
        console.log("页面参数",op)
        this.op = op
        this.getDeviceInfo()
    },
}