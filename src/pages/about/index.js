import HeaderBar from '@/components/header_bar.vue';

export default {
    data() {
        return {
            
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
    },
    onLoad() {
        
    },
}