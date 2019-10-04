import ButtonCell from '@/components/button_cell.vue';
import showToast from '@/plugins/toast.js';
import md5 from 'blueimp-md5';

var timer = null;
var hasCountdown = false;
export default {
    data() {
        return {
            sendCodeText: '获取验证码',
            form: {
                phone: '',
                number: ''
            }
        }
    },
    components: {
        ButtonCell
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh(); //结束刷新
    },
    methods: {
        sendCode() {
            if (!this.form.phone) {
                showToast({ title: '请输入手机号码', icon: 'none' })
                return false;
            }
            if (hasCountdown) {
                showToast({ title: '请稍后尝试', icon: 'none' })
                return false;
            }
            var i = 60;
            hasCountdown = true;
            showToast({ title: '已发送验证码，请查收', icon: 'none' })
            timer = setInterval(() => {
                i = i - 1;
                if (i === 0) {
                    clearInterval(timer);
                    timer = null;
                    hasCountdown = false;
                    i = 0;
                }
                this.sendCodeText = `重新获取(${i}s)`;
            }, 1000);
        },
        login() {
            try {
                const json = {
                    phone: this.form.phone,
                }
                wx.setStorageSync('loginState', json);
                showToast({ title: '登录成功', icon: 'none' });
                setTimeout(() => {
                    wx.switchTab({
                        url: '/pages/device/main'
                    })
                }, 1500);
            } catch (e) {
                showToast({ title: '登录失败', icon: 'none' });
            }
        },
        register() {
            wx.navigateBack({
                delta: 1
            })
        },
    },
    created() {

    }
}
