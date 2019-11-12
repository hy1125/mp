import HeaderBar from '@/components/header_bar.vue';
import Loading from '@/components/loading.vue';
import NoData from '@/components/no_data.vue';
import { showToast } from '@/plugins';
import api from '@/api';

export default {
    data() {
        return {
            statusBarHeight: HeaderBar.getStatusBarHeight(),
            area: "",
            number: "",
            page: 0,
            pageCount: 0,
            loadMore: false,
            needLoadMore: true,
            status: "进入",
            areaList: [
                {
                    "id": 1,
                    "area_3": "干煤棚基建施工工地",
                    "number": "G001"
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
            this.getRegionLinks("", "", page);
        },
        getRegionLinks(number, area, page, clear) {
            const data = {
                number: number,
                area_3: area,
                page: page
            }
            wx.showLoading({
                title: '加载中',
            });
            api.getRegionLinks(data).then(res => {
                console.log("获取网格区域列表数据",res)
                wx.hideLoading()
                const _list = this.areaList;
                let list = [];
                if (page === 0 || clear) {
                    list = res.data.data;
                } else {
                    list = _list.concat(res.data.data);
                }
                this.areaList = list;
                this.loadMore = false;

                this.pageCount = res.data.last_page;
                this.page = res.data.current_page;
            })
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        submitHandle(id) {
            wx.navigateTo({
                url: "/pages/grid_info/main?id="+id
            })
        },
        searchGridArea() {
            this.getRegionLinks(this.number, this.area, this.page, true);
        }
    },
    onLoad(op) {
        let act = op.act || "1";
        this.act = act;
        this.getRegionLinks("", "", this.page);
    },
}