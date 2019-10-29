import { showToast } from '@/plugins';
import HeaderBar from '@/components/header_bar.vue';
import TitleCell from '@/components/title_cell.vue';
import ListCell from '@/components/list_cell.vue';
import PhotoBox from '@/components/photo_box.vue';
import ButtonCell from '@/components/button_cell.vue';
import api from '@/api';
import { dateFormat } from '@/filters';

export default {
    data() {
        return {
            id: '',//隐患id
            status: '',
            notice: '',
            datas: [],
            wid: '隐患类型',
            waid: '隐患详情',
            pic: '',
            des: '隐患描述',
            name: '上报人',
            time: '上报时间',
            des2: '',
            hiddenStatus: 1,
            levelStatus: 4,
            img: '处置图片',
            man: '处置人',
            update_time: '处置时间',
            chooseText: '选择处置结果',
            statusText: '选择处置结果',
            data: {
                multiArray: ['已解决','隔离','评估'],
                multiIndex: 0,
            },
            statusData: {
                statusArray: ['初审未通过','终审通过'],
                statusIndex: 0,
            }
        }
    },
    components: {
        HeaderBar,
        TitleCell,
        ListCell,
        PhotoBox,
        ButtonCell,
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
        bindMultiPickerChange(e) {
            this.data.multiIndex = e.mp.detail.value
            this.chooseText = this.data.multiArray[e.mp.detail.value]
            this.hiddenStatus = Number(e.mp.detail.value) + 1
        },
        bindStatusTextPickerChange(e) {
            this.statusData.statusIndex = e.mp.detail.value
            this.statusText = this.statusData.statusArray[e.mp.detail.value]
            this.levelStatus = Number(e.mp.detail.value) + 4
        },
        submit() {
            if (!this.des2) {
                showToast({ title: `请输入处置说明`, icon: 'none' });
                return false;
            }
            if (this.chooseText == '选择处置结果') {
                showToast({ title: `选择处置结果`, icon: 'none' });
                return false;
            }
            const self = this;
            const data = {
                id: this.id,
                img: this.img,
                result: this.chooseText,
                status: this.hiddenStatus,
                des2: this.des2
            }
            api.getEditHandleDanger(data).then(res => {
                console.log("上报成功",res)
                showToast({ title: `提交成功`, icon: 'none' });
                // if (res && res.code === 0) {
                //     showToast({ title: `上报成功`, icon: 'none' });
                //     wx.setStorageSync('addYH', true);
                //     setTimeout(() => {
                //         self.handleClickHeader();
                //     }, 1500);
                // }
            })
        },
        initiateAudit() {
            const data = {
                id: this.id,
                status: this.levelStatus
            }
            api.getEditLevelHidden(data).then(res => {
                console.log("发起成功", res)
                showToast({ title: `发起成功`, icon: 'none' });
            })
        },
        getHandleDangerInfo(id) {
            const params = {
                id: id || "1",
            }
            wx.showLoading({
                title: '加载中',
            });
            api.getHandleDanger(params).then(res => {
                let that = this;
                wx.hideLoading();
                console.log("获取处置工作单数据", res)
                that.wid = res.data.wid;
                that.waid = res.data.waid;
                that.pic = res.data.pic;
                that.des = res.data.des;
                that.name = res.data.name;
                that.time = res.data.time;
                that.des2 = res.data.des2;
                that.img = res.data.img;
                that.man = res.data.man;
                that.update_time = res.data.update_time;
                that.notice = res.data.notice;
                that.status = res.data.status;
                // that.data.multiArray = [];
                console.log(res.data.notice);
            })
        },
        handleAddPhoto(paths,imgBase) {
            var datas = this.datas;
            if (datas.length > 0){
                wx.showToast({
                    title: '您已上传过处置图片',
                    icon: 'none',
                    duration: 2000
                })
                return false;
            }
            this.datas = datas.concat(paths);
            this.img = imgBase;
            // this.form.pic.push(imgBase)
            console.log("上传图片",paths,this.img)
        },
        handleDelPhoto(index) {
            var datas = this.datas;
            datas.splice(index, 1);
            this.datas = datas;
            this.img = "";
            // var imgdatas = this.form.pic;
            // imgdatas.splice(index, 1);
            // this.form.pic = imgdatas;
        },
        handleInput(e) {
            this.des2 = e.mp.detail.value
        },
    },
    onLoad(op) {
        this.id = op.id;
        this.getHandleDangerInfo(op.id);
    },
}