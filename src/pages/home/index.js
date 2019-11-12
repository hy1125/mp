import { showToast } from '@/plugins';
import api from '@/api';
import HeaderBar from '@/components/header_bar.vue';

export default {
    data() {
        return {
            h: HeaderBar.getStatusBarHeight(),
            actionDatas: [
                {
                    name: '设备扫码', icon: 'icon-scan'
                },
                {
                    name: '电厂概览', icon: 'icon-gailan', path: '/pages/overview/main'
                },
                {
                    name: '通讯录', icon: 'icon-tongxunlu', path: '/pages/contacts/main'
                },
                {
                    name: '视频监测', icon: 'icon-jiankong', path: '/pages/jiance/main'
                },
                {
                    name: '外协管理', icon: 'icon-waixieguanli-', path: '/pages/team/main'
                },
                {
                    name: '隐患上报', icon: 'icon-yinhuan-mian-', path: '/pages/add_yh/main'
                },
                {
                    name: '隐患排查', icon: 'icon-yinhuanpaichazhilicopy', path: '/pages/yhpc_home/main'
                }
            ]
        }
    },
    components: {
        HeaderBar,
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    methods: {
        handleClickHeader() {
            wx.showLoading({
                title: '处理中',
            });
            api.signOut().then(res => {
                wx.hideLoading();
                showToast({ title: res.msg, icon: 'none' });
                if (res.status == 1){
                    wx.clearStorageSync("laravel_session");
                    wx.redirectTo({
                        url: "/pages/login/main"
                    })
                }
            });
        },
        handleClick() {
            wx.scanCode({
                success(res) {
                    console.log(res,"...")
                    var url = res.result; //获取url中"?"符后的字串 
                    var theRequest = new Object(); 
                    let id = ""
                    if (url.indexOf("id") != -1) {
                        let index =  url.indexOf("?")
                        url = url.slice(index)
                        console.log("111",url)
                        var str = url.substr(1); 
                        let strs = str.split("&"); 
                        for(var i = 0; i < strs.length; i ++) { 
                            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
                        } 
                        id = decodeURIComponent(theRequest.id)
                        wx.navigateTo({
                            url: `/pages/grid_info/main?id=${id}`
                        })
                    } else {
                        wx.showToast({
                            title: '扫码失败',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                    
                },
                fail(err) {
                    console.log(err)
                    wx.showToast({
                        title: '扫码失败',
                        icon: 'none',
                        duration: 2000
                    })
                }
            });
        },
        scanCode() {
            wx.scanCode({
                success(res) {
                    console.log(res,"...")

                    // wx.downloadFile({
                    //     url: 'http://47.112.104.43/uploadfile/equipment/20190424/妈湾电厂问题清单.doc',//可以是后台传过来的路径
                    //     success(res) {
                    //         console.log("....",res)
                    //         const filePath = res.tempFilePath
                    //         wx.openDocument({
                    //             filePath: filePath,
                    //             fileType: "doc",
                    //             success: function(res) {
                    //                 console.log("1111",res)
                    //                 //成功
                    //             },
                    //             fail(err) {
                    //                 console.log("111",err)
                    //             }
                    //         })
                    //     },
                    //     fail(err) {

                    //     }
                    // })

                    var url = res.result; //获取url中"?"符后的字串 
                    var theRequest = new Object(); 
                    let pid = ""
                    if (url.indexOf("pid") != -1) {
                        let index =  url.indexOf("?")
                        url = url.slice(index)
                        console.log("111",url)
                        var str = url.substr(1); 
                        let strs = str.split("&"); 
                        for(var i = 0; i < strs.length; i ++) { 
                            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
                        } 
                        pid = decodeURIComponent(theRequest.pid)
                        api.getDeviceScan(`?pid=${pid}`).then(res => {
                            console.log("扫码设备信息",res)
                            wx.navigateTo({
                                url: `/pages/device_info/main?pid=${pid}&id=${res.data.id}`
                            })
                        })
                        
                    } else {
                        wx.showToast({
                            title: '扫码失败',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                    
                },
                fail(err) {
                    console.log(err)
                    wx.showToast({
                        title: '扫码失败',
                        icon: 'none',
                        duration: 2000
                        })
                    // wx.navigateTo({
                    //     url: "/pages/device_introduce/main"
                    // })
                }
            });
        }
    },
    onLoad() {
        // let params = {
        //     id_number: "445333211599988546",
        //     name: "刘大锤"
        // }
        // api.getIdCard(params).then(res=>{
        //     console.log("....",res)
        // })
    }
}
