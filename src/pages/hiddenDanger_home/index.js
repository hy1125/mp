import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
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
        this.getHiddenDangerList(this.act, this.page);
    },
    onReachBottom() {
        let page = this.page;
        page++;
        this.getHiddenDangerList(this.act, page);
    },
    methods: {
        getHiddenDangerList(arg, page) {
            const data = {
                act: arg,
                p: page
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
            that.getHiddenDangerList(path, this.page);
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
        this.act = act;
        this.getHiddenDangerList(act, this.page);
    },
}