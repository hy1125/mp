import HeaderBar from '@/components/header_bar.vue';
import ListCell from '@/components/list_cell.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        HeaderBar,
        ListCell,
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    methods: {
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        logout() {
            wx.showModal({
                title: '提示',
                content: '确定退出该帐号吗？',
                success(res) {
                    if (res.confirm) {
                        try {
                            wx.removeStorageSync('userInfo');
                            wx.removeStorageSync('token');
                            wx.redirectTo({
                                url: '/pages/login/main'
                            })
                        } catch (e) {

                        }
                    } else if (res.cancel) {

                    }
                }
            })
        },
        about() {
            wx.navigateTo({
                url: `/pages/about/main`
            })
        }
    },
    created() {

    },
}