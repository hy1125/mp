import HeaderBar from '@/components/header_bar.vue';
import TimeLineBar from '@/components/time_line_bar.vue';
import ListCell from '@/components/list_cell.vue';
import TitleCell from '@/components/title_cell.vue';
import PhotoBox from '@/components/photo_box.vue';
import ButtonCell from '@/components/button_cell.vue';
import api from '@/api';

export default {
    data() {
        return {
            id: '',
            jxDetail: {},
            datas: [{
                name: '开始检修', time: '2018-10-19 10:10:01'
            },
            {
                name: '开始检修', time: '2018-10-19 10:10:01'
            },
            {
                name: '开始检修', time: '2018-10-19 10:10:01'
            },
            {
                name: '开始检修', time: '2018-10-19 10:10:01'
            }]
        }
    },
    components: {
        HeaderBar,
        TimeLineBar,
        ListCell,
        TitleCell,
        PhotoBox,
        ButtonCell
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
        submit() {

        },
        callPhone(phoneNumber) {
            wx.makePhoneCall({
                phoneNumber: phoneNumber
            })
        },
        getOverhaulInfo() {
            // const params = `?deviceId=${this.id}`;
            // api.getOverhaulInfo(params).then(res => {
            //     if(res && res.code === 0) {
            //         this.jxhDetail = res.response;
            //     }
            // });
            const jxDetail = wx.getStorageSync('jxInfo');
            this.jxDetail = jxDetail;
        }
    },
    onLoad(op) {
        this.id = op.id;
        this.getOverhaulInfo();
    },
}