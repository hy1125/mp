import HeaderBar from '@/components/header_bar.vue';

export default {
    data() {
        return {
            path: '',
        }
    },
    components: {
        HeaderBar
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
    },
    onLoad(op) {
        this.$nextTick(() => {
            if(op && op.path) this.path = op.path;
        })
    },
    created() {
        
    }
}
