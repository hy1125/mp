import HeaderBar from '@/components/header_bar.vue';
import api from '@/api';

export default {
    data() {
        return {
            toView: 'red',
            scrollTop: 100,
            overviewCounts: [
                {
                    label: '外协人员进场',
                    count: 3
                },
                {
                    label: '视频报警次',
                    count: 4
                },
                {
                    label: '隐患上报',
                    count: 3
                },
            ],
            greenDatas: [
                {
                    label: '二氧化碳',
                    count: "mg/m3"
                },
                {
                    label: '氦氧化物',
                    count: "mg/m3"
                },
                {
                    label: '烟尘',
                    count: "mg/m3"
                }
            ],
            powerTitle: ["","1号烟囱", "2号烟囱", "3号烟囱", "4号烟囱", "5号烟囱", "6号烟囱", "合计"],
            powerDatasTitle: [
                {
                    label: '当前负荷',
                    count: "MW"
                },
                {
                    label: '日发电量',
                    count: "MWH"
                },
                {
                    label: '月发电量',
                    count: "亿度"
                },
                {
                    label: '年发电量',
                    count: "亿度"
                },
            ],
            powerDatas: [
                [0.0, 0.00, 0.00,0.74],
                [1670.8, 1.20, 2.68, 2.68],
                [1670.8, 1.20, 2.68, 2.68],
                [1670.8, 1.20, 2.68, 2.68],
                [1670.8, 1.20, 2.68, 2.68],
                [1670.8, 1.20, 2.68, 2.68],
                [1670.8, 7319.2, 3.19, 8.23],
            ],
            // compareCounts: [
            //     {
            //         label: '年度计划上网电量',
            //         count: '20.72亿度'
            //     },
            //     {
            //         label: '年度计划上网电量',
            //         count: '20.73亿度'
            //     },
            //     {
            //         label: '月度计划上网电量',
            //         count: '1.96亿度'
            //     },
            //     {
            //         label: '月度实际上网电量',
            //         count: '1.96亿度'
            //     },
            //     {
            //         label: '年度计划供热量',
            //         count: '98.50万GJ'
            //     },
            //     {
            //         label: '年度实际供热量',
            //         count: '98.50万GJ'
            //     },
            //     {
            //         label: '年度计划供气量',
            //         count: '3.37万吨'
            //     },
            //     {
            //         label: '年度计划供气量',
            //         count: '3.37万吨'
            //     },
            // ],
            productQuotas: [
                ['1号烟囱','3.5','28.7','2'],
                ['2号烟囱','3.5','28.7','2'],
                ['3号烟囱','3.5','28.7','2'],
            ],
            environmentalQuotas: [
                ['', '#1机组', '#2机组'],
                ['机组负荷', '301.76MW', '251.23MW'],
                ['供电煤耗', '312.73g/kWh', '307.16g/kWh']
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
        getHuanbaodata() {
            wx.showLoading({
                title: '加载中',
            });
            api.getHuanbaodata().then(res => {
                console.log("获取隐患上报数", res)
                let that = this;
                that.powerDatas = [];
                that.powerTitle = [];
                that.productQuotas = [];
                wx.hideLoading();
                res.data.environmental.forEach(item => {
                    let arr = [];
                    arr.push(item.name);
                    arr.push(item.two);
                    arr.push(item.nitrogen);
                    arr.push(item.smok);
                    that.productQuotas.push(arr);
                });
                that.powerTitle.push("");
                let dang=0, d=0, m=0, y=0;
                res.data.electricity.forEach(item => {
                    let powerArr = [];
                    that.powerTitle.push(item.name);
                    powerArr.push(item.dang);
                    powerArr.push(item.d);
                    powerArr.push(item.m);
                    powerArr.push(item.y);
                    dang += Number(item.dang);
                    d += Number(item.d);
                    m += Number(item.m);
                    y += Number(item.y);
                    that.powerDatas.push(powerArr);
                });
                that.powerDatas.push([dang.toFixed(2), d.toFixed(2), m.toFixed(2), y.toFixed(2)]);
                that.powerTitle.push("合计");
            })
        }
    },
    onLoad() {
        this.getHuanbaodata();
    },
    
}