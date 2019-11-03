import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';
import { showToast } from '@/plugins';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            pageCount: '',
            page: 0,
            loadMore: false,
            needLoadMore: true,
            list: [
                {
                    id: 0,
                    name: '未带安全帽',
                    addree: '汽机房连廊入口',
                    time: '2019/01/01  19:00:11'
                },
                {
                    id: 0,
                    name: '翻越皮带',
                    addree: '1车间',
                    time: '2019/01/01  19:00:11'
                },
            ]
        }
    },
    components: {
        HeaderBar,
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
    },
    methods: {
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        initiateData(page) {
            const data = {
                p: page
            }
            wx.showLoading({
                title: '加载中',
            });
            api.getVidelist(data).then(res => {
                console.log("发起成功", res)
                wx.hideLoading();
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
                this.pageCount = Number(res.data.p)/20;
                // this.pageCount = res.data.p;
                this.page = page;
            })
        },
        loadMoreDatas() {
            if (this.page === this.pageCount && this.pageCount !== 0) {
                this.needLoadMore = false
                showToast({ title: `暂无数据`, icon: 'none' });
                return;
            }
            let page = this.page;
            page = page + 1;
            this.initiateData(page);
        },
        handleClick(id) {
            wx.navigateTo({
                url: "/pages/yj_details/main?id="+id
            })
        }
    },
    onLoad() {
        this.initiateData(0);
    },
}