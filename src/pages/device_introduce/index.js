import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';

export default {
    data() {
        return {
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
        toLogin() {
            wx.navigateTo({
                url: "/pages/login/main"
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
    },
}