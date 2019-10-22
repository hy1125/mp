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
            id: '',
            datas: [],
            typeText: '选择工作单类型',
            detailText: '选择工作单详情',
            departmentText: '选择处置部门',
            chooseText: '选择处置网格员',
            danger_area: '责任网格',
            form: {
                type: '',          //类型
                details: '',          //详情
                des: '',    //隐患描述
                operator1: '',         //处置网格员
                department: '',     //责任部门
                pic: [],            //隐患说明图片
                grid_id: ''
            },
            typeData: {
                typeArray: [],
                typeIndex: 0,
            },
            detailData: {
                detailArray: [],
                detailIndex: 0,
            },
            departmentData: {
                departmentArray: [],
                departmentIndex: 0,
            },
            detailArrs: [],
            multiArrs: [],
            data: {
                multiArray: [],
                multiIndex: 0,
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
            this.form = {
                name: '',
                des: '',
                department: ''
            }
            wx.navigateBack({
                delta: 1
            })
        },
        typePickerChange(e) {
            this.typeData.typeIndex = e.mp.detail.value
            this.typeText = this.typeData.typeArray[e.mp.detail.value]
            this.form.type = this.typeText
            this.detailData.detailArray = this.detailArrs[e.mp.detail.value]
            this.detailText = "选择工作单详情";
        },
        detailPickerChange(e) {
            this.detailData.detailIndex = e.mp.detail.value
            this.detailText = this.detailData.detailArray[e.mp.detail.value]
            this.form.details = this.detailText
        },
        departmentPickerChange(e) {
            this.departmentData.departmentIndex = e.mp.detail.value
            this.departmentText = this.departmentData.departmentArray[e.mp.detail.value]
            this.form.department = this.departmentText
            this.data.multiArray = this.multiArrs[e.mp.detail.value]
            this.chooseText = "选择处置网格员"
        },
        bindMultiPickerChange(e) {
            this.data.multiIndex = e.mp.detail.value
            this.chooseText = this.data.multiArray[e.mp.detail.value]
            this.form.operator1 = this.chooseText
        },
        submit() {
            if (!this.form.des) {
                showToast({ title: `请输入隐患描述`, icon: 'none' });
                return false;
            }
            if (this.form.pic.length == 0) {
                showToast({ title: `请上传隐患说明图片`, icon: 'none' });
                return false;
            }
            if (!this.form.department) {
                showToast({ title: `请选择责任部门`, icon: 'none' });
                return false;
            }
            if (!this.form.operator1) {
                showToast({ title: `选择处置网格员`, icon: 'none' });
                return false;
            }
            const self = this;
            // const userInfo = wx.getStorageSync('userInfo')
            // const data = {
            //     deviceId: this.id,
            //     report: userInfo.userName,
            //     disposalTime: `${this.form.disposalDate} ${this.form.disposalTime}:00`,
            //     status: 0,
            //     kks: this.kks,
            //     description: this.form.description
            // }
            const data = {
                type: this.form.type,
                details: this.form.details,
                des: this.form.des,
                pic: this.form.pic[0],
                operator1: this.form.operator1,
                grid_id: this.form.grid_id,
                department: this.form.department
            }
            let imgLength = this.form.pic.length
            if(imgLength > 1) {
                data.source2 = this.form.pic[1]
                if(imgLength > 2) {
                    data.source3 = this.form.pic[2]
                    if(imgLength > 3) {
                        data.source4 = this.form.pic[3]
                        if(imgLength > 4) {
                            data.source5 = this.form.pic[4]
                        }
                    }
                }
            }
            api.getDanger(data).then(res => {
                console.log("上报成功",res)
                showToast({ title: `上报成功`, icon: 'none' });
                // if (res && res.code === 0) {
                //     showToast({ title: `上报成功`, icon: 'none' });
                //     wx.setStorageSync('addYH', true);
                //     setTimeout(() => {
                //         self.handleClickHeader();
                //     }, 1500);
                // }
            })
        },
        getAllDepartmentList(id) {
            const params = {
                id: id || "1",
            }
            wx.showLoading({
                title: '加载中',
            });
            api.getCheckType(params).then(res => {
                let that = this;
                console.log("获取全部部门",res)
                wx.hideLoading()
                that.danger_area = res.data.area.respon
                that.typeData.typeArray = []
                res.data.list.forEach(item => {
                    that.typeData.typeArray.push(item.name)
                    let arr = [];
                    item.son.forEach(i => {
                        arr.push(i.details)
                    });
                    that.detailArrs.push(arr);
                });
                res.data.department.forEach(item => {
                    that.departmentData.departmentArray.push(item.name)
                    let arr = [];
                    item.dep.forEach(i => {
                        arr.push(i.operator1)
                    });
                    that.multiArrs.push(arr);
                });
            })
        },
        handleAddPhoto(paths,imgBase) {
            var datas = this.datas;
            this.datas = datas.concat(paths);
            this.form.pic.push(imgBase)
            console.log("上传图片",paths,this.form.pic)
        },
        handleDelPhoto(index) {
            var datas = this.datas;
            datas.splice(index, 1);
            this.datas = datas;
            var imgdatas = this.form.pic;
            imgdatas.splice(index, 1);
            this.form.pic = imgdatas;
        },
        handleInput(e) {
            this.form.des = e.mp.detail.value
        },
    },
    onLoad(op) {
        this.id = op.id;
        this.form.grid_id = op.id || 1;
        this.getAllDepartmentList(op.id)
    },
}