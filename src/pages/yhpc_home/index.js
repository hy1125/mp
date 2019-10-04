import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';

export default {
    data() {
        return {
            yhNumber: ""
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
                type: 3
            }
            api.getHiddenDangerList(data).then(res => {
                console.log("获取隐患上报数",res)
                this.yhNumber = res.count
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
    onLoad() {
        this.getHiddenDangerList()        
    },
}