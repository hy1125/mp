import ButtonCell from '@/components/button_cell.vue';
import showToast from '@/plugins/toast.js';
import md5 from 'blueimp-md5';
import api from '@/api';

var timer = null;
var hasCountdown = false;
export default {
    data() {
        return {
            sendCodeText: '获取验证码',
            passwordType: "password",
            iconfontText: "iconfont icon-biyan",
            form: {
                phone: '',
                password: ''
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
            if (!this.form.phone) {
                showToast({ title: '请输入工号', icon: 'none' });
                return false;
            }
            if (!this.form.password) {
                showToast({ title: '请输入密码', icon: 'none' });
                return false;
            }
            // const params = `?account=${this.form.phone}&password=${md5(this.form.password)}&platform=app`;
            const params = {
                number: this.form.phone,
                password: this.form.password
            }
            //存一个过期时间
            var timestamp=Date.parse(new Date());
            var expiration = timestamp + 7200000;//7200秒（120分钟）
            wx.setStorageSync("index_data_expiration", expiration);

            
            api.loginUser(params).then(res => {
                console.log("登录成功",res)
                if (res) {
                    // const response = res.response;
                    // wx.setStorageSync('userInfo', response.userInfo);
                    // wx.setStorageSync('token', response.token);
                    wx.setStorageSync("laravel_session", res.header["Set-Cookie"])
                    showToast({ title: '登录成功', icon: 'none' });
                    setTimeout(() => {
                        wx.navigateTo({
                            url: '/pages/home/main'
                        })
                        // wx.switchTab({
                        //     url: '/pages/device/main'
                        // })
                    }, 1500);
                }
            })

        },
        passwordDelete() {
            this.form.password = "" 
        },
        passwordSee() {
            if(this.iconfontText == "iconfont icon-biyan") {
                this.passwordType = "text"
                this.iconfontText = "iconfont icon-eye"
            }else{
                this.passwordType = "password"
                this.iconfontText = "iconfont icon-biyan"
            }
        },
        register() { 
            wx.navigateTo({
                url: '/pages/register/main'
                // url: '/pages/home/main'
            })
        },
        forgetPwd() {

        }
    },
    onLoad() {
        if(wx.getStorageSync('laravel_session')) {
            wx.navigateTo({
                url: '/pages/home/main'
            })
        }
    }
}
