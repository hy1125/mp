import { showToast } from '@/plugins';
import api from '@/api';
import HeaderBar from '@/components/header_bar.vue';
import SearchBar from '@/components/search_bar.vue';
import DoubleList from '@/components/double_list.vue';

export default {
    data() {
        return {
            datas: [1, 2, 3, 4, 5, 6, 7]
        }
    },
    components: {
        SearchBar,
        DoubleList,
        HeaderBar
    },
    onPullDownRefresh() {

    },
    methods: {
        initLoginState() {
            const value = wx.getStorageSync('userInfo')
            if (value) {
                wx.switchTab({
                    url: '/pages/home/main'
                })
            } else {
                wx.redirectTo({
                    url: '/pages/login/main'
                })
            }
        }
    },
    onLoad() {
        this.initLoginState();
    }
}
