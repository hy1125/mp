import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';

export default {
    data() {
        return {
            act: "1",
            page: 0,
            status: "立即处理",
            list: [
                {
                    "id": 1,
                    "wid": "",
                    "waid": "",
                    "status": 4,
                    "status_name": ""
                }
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
        getHiddenDangerList(arg) {
            const data = {
                act: arg,
                p: this.page
            }
            wx.showLoading({
                title: '加载中',
            });
            api.getCheckDanger(data).then(res => {
                console.log("获取隐患上报数",res)
                wx.hideLoading()
                this.list = res.data.list
                this.page = res.data.p
            })
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        submitHandle(id) {
            wx.navigateTo({
                url: "/pages/hiddenDanger_investigation/main?id="+id
            })
        },
        handleClick(path) {
            let that = this;
            that.act = path;
            that.getHiddenDangerList(path);
            switch (path) {
                case "2":
                    that.status = "查看";
                    break;
                default:
                    that.status = "立即处理";
                    break;
            }
        }
    },
    onLoad(op) {
        let act = op.act || "1";
        this.getHiddenDangerList(act);
    },
}