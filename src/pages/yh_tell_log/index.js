import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';

export default {
    data() {
        return {
            list: [
                // {
                //     danger_title: 'XX隐患一',
                //     danger_text: '天然气主管道天然气主管道天然气主管道天然气主管道'
                // },
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
        getHiddenDangerList() {
            const data = {
                type: 1
            }
            api.getHiddenDangerList(data).then(res => {
                console.log("获取隐患上报记录",res)
                this.list = [...res.data]
            })
        },
        getTabDatas() {
            this.getHiddenDangerList()
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleClick(data) {
            wx.navigateTo({
                url: `/pages/yh_tell_log_details/main?id=${data.id}`
            })
        }
    },
    onLoad() {
        this.getHiddenDangerList()
    },
}