import HeaderBar from '@/components/header_bar.vue';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            list: [
                {
                    name: '未带安全帽',
                    location: '汽机房连廊入口',
                    time: '2019/01/01  19:00:11'
                },
                {
                    name: '翻越皮带',
                    location: '1车间',
                    time: '2019/01/01  19:00:11'
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
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleClick() {
            wx.navigateTo({
                url: "/pages/yj_details/main"
            })
        }
    },
    onLoad() {
        
    },
}