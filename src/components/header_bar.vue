<template>
    <div class="header-bar" :style="{ backgroundColor: backgroundColor || '#fff', paddingTop: statusBarHeight + 'px' }">
        <div class="header-left" @click="handleClick" :style="{widht: '44px',height: '44px'}">
            <i class="iconfont" :class="isBack ? 'icon-left' : iconClass" :style="'color: ' + iconColor" v-if="iconLeft">{{leftText}}</i>
        </div>
        <div class="header-center" :style="{color: titleColor || '#000',height:'44px'}">{{title}}</div>
    </div>
</template>

<script>
export default {
    getStatusBarHeight() {
        return wx.getSystemInfoSync().statusBarHeight + 44
    },
    props: ['title', 'iconLeft', 'iconClass', 'isBack', 'backgroundColor', 'iconColor', 'titleColor', 'leftText'],
    data(){
        return {
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight, //系统状态栏高度
        }
    },
    methods: {
        handleClick() {
            if(this.iconLeft) this.$emit('clickEvent');
        }    
    }
}
</script>


<style lang="less">
.header-bar {
    width: 100%;
    position: fixed;
    top: 0;
    margin: auto;
    left: 0;
    right: 0;
    z-index: 100;
    height: auto;
    flex-direction: row;
    align-items: flex-end;
    box-sizing: content-box;
    .header-left {
        position: absolute;
        z-index: 100;
        left: 0;
        height: 44px;
        width: 44px;
        justify-content: center;
        align-items: center;
        i {
            font-size: 18px;
            color: #333;
        }
    }
    .header-center {
        font-size: 18px;
        color: #000;
        width: 100%;
        height: 44px;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .light {
        color: #fff;
    }
}
</style>

