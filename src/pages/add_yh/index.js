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
            name: '',
            kks: '',
            datas: [],
            chooseText: '选择部门',
            form: {
                title: '',          //标题
                description: '',    //隐患描述
                people: '',         //上报人
                department: '',     //责任部门
                img: [],            //隐患说明图片
            },
            endDate: '',
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
                people: '',
                description: '',
                department: ''
            }
            wx.navigateBack({
                delta: 1
            })
        },
        bindMultiPickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.mp.detail.value)
            this.data.multiIndex = e.mp.detail.value
            this.chooseText = this.data.multiArray[e.mp.detail.value]
            this.form.department = this.chooseText
        },
        submit() {
            if (!this.form.description) {
                showToast({ title: `请输入隐患描述`, icon: 'none' });
                return false;
            }
            if (this.form.img.length == 0) {
                showToast({ title: `请上传隐患说明图片`, icon: 'none' });
                return false;
            }
            if (!this.form.department) {
                showToast({ title: `请选择责任部门`, icon: 'none' });
                return false;
            }
            if (!this.form.people) {
                showToast({ title: `请输入上报人`, icon: 'none' });
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
                text: this.form.description,
                source: this.form.img[0],
                name: this.form.people,
                title: this.form.title,
                department: this.form.department
            }
            let imgLength = this.form.img.length
            if(imgLength > 1) {
                data.source2 = this.form.img[1]
                if(imgLength > 2) {
                    data.source3 = this.form.img[2]
                    if(imgLength > 3) {
                        data.source4 = this.form.img[3]
                        if(imgLength > 4) {
                            data.source5 = this.form.img[4]
                        }
                    }
                }
            }
            api.addHiddenDanger(data).then(res => {
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
        getAllDepartmentList() {
            api.getAllDepartmentList().then(res => {
                console.log("获取全部部门",res)
                this.data.multiArray = []
                res.data.forEach(item => {
                    this.data.multiArray.push(item.department)
                });
            })
        },
        handleAddPhoto(paths,imgBase) {
            var datas = this.datas;
            this.datas = datas.concat(paths);
            this.form.img.push(imgBase)
            console.log("上传图片",paths,this.form.img)
        },
        handleDelPhoto(index) {
            var datas = this.datas;
            datas.splice(index, 1);
            this.datas = datas;
            var imgdatas = this.form.img;
            imgdatas.splice(index, 1);
            this.form.img = imgdatas;
        },
        bindDateChange(e) {
            this.form.disposalDate = e.mp.detail.value
        },
        bindTimeChange(e) {
            this.form.disposalTime = e.mp.detail.value
        },
        handleInput(e) {
            this.form.description = e.mp.detail.value
        },
    },
    onLoad(op) {
        this.id = op.id;
        this.name = op.name;
        this.kks = op.kks;
        this.endDate = dateFormat(new Date(), 'YYYY-MM-DD');
        this.getAllDepartmentList()
    },
}