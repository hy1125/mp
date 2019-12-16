<template>
    <div class="login-wrap">
        <div class="login-content">
            <div class="logo-icon">
                <!-- <i class="iconfont icon-safetycertificate"></i> -->
                <img class="logo-item" src="/static/logo.jpg">
                <div class="logo-name">妈 湾 电 厂</div>
            </div>
            <div class="logo-input">
                <div class="input-cell">
                    <i class="iconfont icon-user"></i>
                    <input type="text" placeholder="手机号或姓名" v-model="form.phone"/>
                </div>
            </div>
            <div class="logo-input logo-input-password">
                <!-- <div class="input-cell border-bottom"> 
                    <input type="number" placeholder="验证码" v-model="form.number"/>
                    <div class="send-code" @click="sendCode">{{sendCodeText}}</div>
                </div> -->
                <div class="input-cell"> 
                    <div class="input-item">
                        <i class="iconfont icon-suo"></i>
                        <input v-if="passwordType == 'password'" type="password" placeholder="登录密码" v-model="form.password"/>
                        <input v-if="passwordType == 'text'" type="text" placeholder="登录密码" v-model="form.password"/>
                    </div>
                    <div v-if="form.password ==''">
                        <i class="iconfont icon-eye"></i>
                    </div>
                    <div v-if="form.password !=''">
                        <i class="iconfont icon-delete" @click="passwordDelete"></i>
                        <i :class="iconfontText" @click="passwordSee"></i>
                    </div>
                </div>
            </div>
            <div class="logo-input logo-input-btn" @click="login">
                <p>登录</p>
            </div>
            <!-- <div class="logo-input register-btn">
                <div class="fotger-pwd"></div>
                <div class="register" @click="register">注册</div>
            </div> -->
            <!-- <ButtonCell text="登录" padding="padding: 0 40px" @onPress="login"></ButtonCell> -->
        </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>