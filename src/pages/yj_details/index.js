import HeaderBar from '@/components/header_bar.vue';

export default {
    data() {
        return {
            list: [
                {
                    name: '摄像头编码',
                    location: 'A00888',
                },
                {
                    name: '预警时间',
                    location: '2019/01/01  19:00:11',
                },
                {
                    name: '预警位置',
                    location: '锅炉房',
                },
                {
                    name: '监测类型',
                    location: '未带安全帽',
                },
                {
                    name: '预警截图',
                    location: '1车间',
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
    },
    onLoad() {
        
    },
}