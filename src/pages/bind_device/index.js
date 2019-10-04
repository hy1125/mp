import HeaderBar from '@/components/header_bar.vue';
import ListCell from '@/components/list_cell.vue';
import ButtonCell from '@/components/button_cell.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        HeaderBar,
        ListCell,
        ButtonCell
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    methods: {
        deviceTypeFn() { },
        deviceNoFn() { },
        deviceGroupFn() { },
        submit() {
            wx.showModal({
                title: '二维码绑定成功',
                content: '锅炉009已成功绑定编号为：0900的设备二维码，现在可通过微信扫描二维码进行设备信息查询、隐患管理及检修跟踪等设备管理相关操作。',
                showCancel: false,
                confirmText: '查看设备',
                success(res) {
                    if (res.confirm) {
                        wx.navigateTo({
                            url: `/pages/device_info/main?id=${1}`
                        })
                    }
                }
            })
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        }
    },
    onLoad() {

    },
}