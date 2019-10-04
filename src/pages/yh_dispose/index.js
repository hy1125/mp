import { showToast } from '@/plugins';
import HeaderBar from '@/components/header_bar.vue';
import PhotoBox from '@/components/photo_box.vue';
import api from '@/api';
import apiconf from '../../api/apiconf.js';

export default {
    data() {
        return {
            id: "",
            explain: {
                text: "",
                disponer: "",
                img: []
            },
            content: {
                danger: "天然气主管老化",
                imgSrc: ""
            },
            datas: [],
        }
    },
    components: {
        HeaderBar,
        PhotoBox
    },
    onPullDownRefresh() {
        this.getTabDatas();
    },
    methods: {
        getHiddenDangerDetails() {
            const data = {
                type: 1,
                id: this.id
            }
            api.getHiddenDangerDetails(data).then(res => {
                console.log("获取隐患详情",res)
                this.content.danger = res.info.danger_text
                this.content.imgSrc = apiconf.domainIp + res.info.danger_img
                this.content.imgSrc2 = "http://47.112.104.43" + res.info.danger_img
            })
        },
        imgError() {
            this.content.imgSrc = this.content.imgSrc2
        },
        getTabDatas() {
            this.getHiddenDangerDetails()
        },
        submit() {
            if (!this.explain.text) {
                showToast({ title: `请输入整改说明`, icon: 'none' });
                return false;
            }
            if (this.explain.img.length == 0) {
                showToast({ title: `请上传整改说明图片`, icon: 'none' });
                return false;
            }
            if (!this.explain.disponer) {
                showToast({ title: `请输入处置人`, icon: 'none' });
                return false;
            }

            const data = {
                text: this.explain.text,
                source: this.explain.img[0],
                id: this.id,
                name: this.explain.disponer
            }
            api.updateHiddenDanger(data).then(res => {
                console.log("整改完成",res)
                showToast({ title: '整改完成', icon: 'none' });
            })
        },
        handleAddPhoto(paths,imgBase) {
            var datas = this.datas;
            this.datas = datas.concat(paths);
            this.explain.img.push(imgBase);
        },
        handleDelPhoto(index) {
            var datas = this.datas;
            datas.splice(index, 1);
            this.datas = datas;
            var imgdatas = this.explain.img;
            imgdatas.splice(index, 1);
            this.explain.img = imgdatas;
        },
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
    },
    onLoad(op) {
        this.id = op.id
        this.getHiddenDangerDetails()
    },
}