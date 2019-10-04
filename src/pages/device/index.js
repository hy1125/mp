import { showToast } from '@/plugins';
import api from '@/api';
import HeaderBar from '@/components/header_bar.vue';
import SearchBar from '@/components/search_bar.vue';
import DoubleList from '@/components/double_list.vue';
import Loading from '@/components/loading.vue';
import NoData from '@/components/no_data.vue';
import { deviceStatusFilter } from '@/filters';

const count = 20;
export default {
    data() {
        return {
            datas: [
                {
                    name: "aaa",
                    kks: "111",
                    status: "异常",
                }
            ],
            isLoading: false,
            page: 1,
            pageCount: 1,
            loadMore: false,
            needLoadMore: true,
            filterBars: [
                {
                    name: '部门',
                    active: false
                },
                {
                    name: '车间',
                    active: false
                },
                {
                    name: '类型',
                    active: false
                },
                {
                    name: '功能',
                    active: false
                },
            ]
        }
    },
    components: {
        SearchBar,
        DoubleList,
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
        deviceStatusFilter,
        getDatas(page) {
            const params = `?page=${page}&count=${count}`;
            api.getDeviceList(params).then(res => {
                if (res && res.code === 0) {
                    const response = res.response;
                    const _datas = this.datas;
                    let datas = [];
                    if (page === 1) {
                        datas = response.datas;
                    } else {
                        datas = _datas.concat(response.datas);
                    }
                    this.datas = datas;
                    this.pageCount = response.pageCount
                    this.page = response.page
                    this.needLoadMore = response.pageCount <= 1 ? false : true;
                    this.loadMore = false;
                }
            })
        },
        loadMoreDatas() {
            if (this.page === this.pageCount) {
                this.needLoadMore = false;
                this.loadMore = false;
                showToast({ title: `暂无数据`, icon: 'none' });
                return;
            }
            let page = this.page;
            page = page + 1;
            this.getDatas(page);
        },
        handleInput(value) {
            console.log(value);
        },
        handleClickHeader() {
            wx.showActionSheet({
                itemList: ['筛选部门', '筛选车间', '设备类型', '功能作用'],
                success: function (res) {
                    console.log(res.tapIndex)
                },
                fail: function (res) {
                    console.log(res.errMsg)
                }
            })
        },
        goDetail(item) {
            wx.navigateTo({
                url: `/pages/device_info/main?id=${item.deviceId}`
            })
        },
        showFilter(bar) {
            bar.active = !bar.active;
        }
    },
    onLoad() {
        // this.getDatas(1);
    }
}
