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
            form: {
                time: '',    //备注时间
                people: '',         //备注人
                content: '',     //备注内容
                img: []
            },
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
                time: '',
                content: '',
                img: []
            }
            wx.navigateBack({
                delta: 1
            })
        },
        submit() {
            if (!this.form.time) {
                showToast({ title: `请输入备注时间`, icon: 'none' });
                return false;
            }
            if (!this.form.people) {
                showToast({ title: `请输入备注人`, icon: 'none' });
                return false;
            }
            if (!this.form.content) {
                showToast({ title: `请输入备注内容`, icon: 'none' });
                return false;
            }
            if (this.form.img.length == 0) {
                showToast({ title: `请上传备注图片`, icon: 'none' });
                return false;
            }
            const self = this;
            const data = {
                type: 3,
                pid: self.id,
                name: self.form.people,
                time: self.form.time,
                content: self.form.content,
                source: self.form.img[0],
            }
            api.getDeviceInfo(data).then(res => {
                showToast({ title: `添加备注成功`, icon: 'none' });
                setTimeout(() => {
                    self.handleClickHeader();
                }, 1500);
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
        this.id = op.pid;
    },
}