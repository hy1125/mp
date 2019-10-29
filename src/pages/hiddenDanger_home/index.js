import HeaderBar from '@/components/header_bar.vue';
import Loading from '@/components/loading.vue';
import NoData from '@/components/no_data.vue';
import api from '@/api';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            act: "1",
            page: 0,
            pageCount: 1,
            loadMore: false,
            needLoadMore: true,
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
        Loading,
        NoData
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    onReachBottom() {
        if (this.loadMore) return;
        this.$nextTick(() => {
            this.loadMore = true;
            this.loadMoreDatas();
        });
        // let page = this.page;
        // page++;
        // this.getHiddenDangerList(this.act, page);
    },
    methods: {
        loadMoreDatas() {
            if (this.page === this.pageCount) {
                this.needLoadMore = false
                showToast({ title: `暂无数据`, icon: 'none' });
                return;
            }
            let page = this.page;
            page = page + 1;
            this.getHiddenDangerList(this.act,page);
        },
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
                const _list = this.list;
                let list = [];
                if (page === 0) {
                    list = res.data.list;
                } else {
                    list = _list.concat(res.data.list);
                }
                this.list = list;
                this.loadMore = false;

                // this.list = res.data.list
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