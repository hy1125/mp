<template>
    <div class="login-wrap">
        <div class="login-content">
            <div class="logo-icon">
                <img class="logo-item" src="/static/logo.jpg">
                <div class="logo-name">妈 湾 电 厂</div>
            </div>
            <div class="logo-input">
                <div class="input-cell border-bottom" style="width: 100%;">
                    <input type="number" placeholder="手机号码" v-model="form.phone"/>
                </div>
            </div>
            <div class="logo-input">
                <div class="input-cell border-bottom"> 
                    <input type="number" placeholder="验证码" v-model="form.number"/>
                    <div class="send-code" @click="sendCode">{{sendCodeText}}</div>
                </div>
            </div>
            <div class="logo-input register-btn">
                <div class="fotger-pwd"></div>
                <div class="register" @click="register">立即登录</div>
            </div>
            <ButtonCell text="注册" padding="padding: 0 40px" @onPress="login"></ButtonCell>
        </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>