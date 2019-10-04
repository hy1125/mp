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
            list2Img2: "",
            list: [
                {
                    name: '存在的隐患',
                    location: '',
                },
                {
                    name: '图片',
                    location: '',
                },
                {
                    name: '责任部门',
                    location: '',
                },
                {
                    name: '上报时间',
                    location: '',
                },
                {
                    name: '上报人',
                    location: '',
                },
            ],
            list2: [
                {
                    name: '整改情况说明',
                    location: '',
                },
                {
                    name: '整改图片',
                    location: '',
                },
                {
                    name: '处置人',
                    location: '',
                },
                {
                    name: '上报时间',
                    location: '',
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
                type: 2,
                id: this.id
            }
            api.getHiddenDangerDetails(data).then(res => {
                console.log("获取隐患详情",res)
                let list = this.list
                let list2 = this.list2
                list[0].location = res.info.danger_text
                list[1].location = this.ipconfig + res.info.danger_img
                this.img2 = "http://47.112.104.43" + res.info.danger_img
                list[2].location = res.info.department
                list[3].location = dateFormat(res.info.danger_time*1000, 'YYYY-MM-DD')
                list[4].location = res.info.name

                list2[0].location = res.info.danger_update_text
                list2[1].location = this.ipconfig + res.info.danger_update_img
                this.list2Img2 = "http://47.112.104.43" + res.info.danger_update_img
                list2[2].location = res.info.danger_update_name
                list2[3].location = dateFormat(res.info.danger_update_time*1000, 'YYYY-MM-DD')

            })
        },
        imgError(type) {
            switch (type) {
                case "list":
                    this.list[1].location = this.img2
                    break;
                case "list2":
                    this.list2[1].location = this.list2Img2
                    break;
                default:
                    break;
            }
            
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
        this.id = op.id
        this.getHiddenDangerDetails()
    },
}