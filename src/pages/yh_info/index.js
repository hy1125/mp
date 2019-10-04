import { showToast } from '@/plugins';
import HeaderBar from '@/components/header_bar.vue';
import StatusBar from '@/components/status_bar.vue';
import ListCell from '@/components/list_cell.vue';
import TitleCell from '@/components/title_cell.vue';
import PhotoBox from '@/components/photo_box.vue';
import ButtonCell from '@/components/button_cell.vue';
import api from '@/api';
import { yhStatusFilter } from '@/filters';

export default {
    data() {
        return {
            id: '',
            yhDetail: {},
            replyDatas: [],
            checkedDatas: [],
            form: {
                replyText: '',
                checkedText: ''
            },
        }
    },
    computed: {
        submitText() {
            const yhDetail = this.yhDetail;
            if (yhDetail.status === 0 && !yhDetail.disposalContext) {
                return '开始处理';
            } else if (yhDetail.status === 1 && yhDetail.disposalContext) {
                return '排除隐患';
            } else if (yhDetail.status === 2 && !yhDetail.opinion) {
                return '提交意见';
            } else {
                return '提交';
            }
        },
        buttonType() {
            const yhDetail = this.yhDetail;
            if (yhDetail.status === 0 && !yhDetail.disposalContext) {
                return 0;
            } else if (yhDetail.status === 1 && yhDetail.disposalContext) {
                return 1;
            } else if (yhDetail.status === 2 && !yhDetail.opinion) {
                return 2;
            } else {
                return 3;
            }
        }
    },
    components: {
        HeaderBar,
        StatusBar,
        ListCell,
        TitleCell,
        PhotoBox,
        ButtonCell
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    methods: {
        yhStatusFilter,
        handleClickHeader() {
            wx.navigateBack({
                delta: 1
            })
        },
        handleAddReplyPhoto(paths) {
            var datas = this.replyDatas;
            this.replyDatas = datas.concat(paths);
        },
        handleDelReplyPhoto(index) {
            var datas = this.replyDatas;
            datas.splice(index, 1);
            this.replyDatas = datas;
        },
        handleAddCheckedPhoto(paths) {
            var datas = this.checkedDatas;
            this.checkedDatas = datas.concat(paths);
        },
        handleDelCheckedPhoto(index) {
            var datas = this.checkedDatas;
            datas.splice(index, 1);
            this.checkedDatas = datas;
        },
        getHiddenDangerInfo() {
            const params = `/${this.id}`;
            api.getHiddenDangerInfo(params).then(res => {
                if (res && res.code === 0) {
                    const yhDetail = wx.getStorageSync('yhInfo');
                    this.yhDetail = {
                        ...res.response,
                        name: yhDetail.name,
                    };
                }
            });
        },
        handleReplyInput(e) {
            this.form.replyText = e.mp.detail.value;
        },
        handleCheckedInput(e) {
            this.form.checkedText = e.mp.detail.value;
        },
        submit() {
            const buttonType = this.buttonType;
            switch (buttonType) {
                case 0:
                    this.replyHiddenDanger();
                    break;
                case 1:
                    this.updateHiddenDangerInfo();
                    break;
                case 2:
                    this.checkedHiddenDanger();
                    break;
                case 3:
                    showToast({ title: `该隐患不支持该操作`, icon: 'none' });
                    break;
                default:
                    console.log('shit!')
            }
        },
        replyHiddenDanger() {
            if (!this.form.replyText) {
                showToast({ title: `请输入回复内容`, icon: 'none' });
                return false;
            }
            const userInfo = wx.getStorageSync('userInfo');
            const data = {
                hiddenDangerId: this.yhDetail.hiddenDangerId,
                context: this.form.replyText,
                type: 1,
                image: '123.png',
                userId: userInfo.userId,
                userName: userInfo.userName,
            }
            api.handleHiddenDanger(data, {}).then(res => {
                if (res && res.code === 0) {
                    showToast({ title: `提交成功`, icon: 'none' });
                    this.$nextTick(() => {
                        this.getHiddenDangerInfo();
                    })
                }
            })
        },
        checkedHiddenDanger() {
            if (!this.form.checkedText) {
                showToast({ title: `请输入验收意见`, icon: 'none' });
                return false;
            }
            const userInfo = wx.getStorageSync('userInfo');
            const data = {
                hiddenDangerId: this.yhDetail.hiddenDangerId,
                context: this.form.checkedText,
                type: 2,
                image: '123.png',
                opinionUserId: userInfo.userId,
                opinionUserName: userInfo.userName,
            }
            api.handleHiddenDanger(data, {}).then(res => {
                if (res && res.code === 0) {
                    showToast({ title: `提交成功`, icon: 'none' });
                    this.$nextTick(() => {
                        this.getHiddenDangerInfo();
                    })
                }
            })
        },
        updateHiddenDangerInfo() {
            const params = `?hiddenDangerId=${this.yhDetail.hiddenDangerId}`;
            api.updateHiddenDangerInfo(params).then(res => {
                if (res && res.code === 0) {
                    showToast({ title: `提交成功`, icon: 'none' });
                    this.$nextTick(() => {
                        this.getHiddenDangerInfo();
                    })
                }
            })
        }
        // getHiddenDangerInfo() {
        //     const yhDetail = wx.getStorageSync('yhInfo');
        //     this.yhDetail = yhDetail;
        // }
    },
    onLoad(op) {
        this.id = op.id;
        this.getHiddenDangerInfo();
    },
}