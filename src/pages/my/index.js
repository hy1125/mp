import HeaderBar from '@/components/header_bar.vue';
import ListCell from '@/components/list_cell.vue';

export default {
    data() {
        return {
            userInfo: {}
        }   
    },
    components: {
        HeaderBar,
        ListCell
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
        setting() {
            wx.navigateTo({
                url: `/pages/setting/main`
            })
        },
        getUserInfo() {
            try {
                const userInfo = wx.getStorageSync('userInfo')
                if (userInfo) {
                    this.userInfo = userInfo;
                }
            } catch (e) {
                
            }
        }
    },
    onLoad() {
        this.getUserInfo()
    }
}
