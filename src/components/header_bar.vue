<template>
    <div class="header-bar" :style="{ backgroundColor: backgroundColor || '#fff' }">
        <div class="header-left" @click="handleClick">
            <i class="iconfont" :class="isBack ? 'icon-left' : iconClass" :style="'color: ' + iconColor" v-if="iconLeft"></i>
        </div>
        <div class="header-center">{{title}}</div>
    </div>
</template>

<script>
export default {
    props: ['title', 'iconLeft', 'iconClass', 'isBack', 'backgroundColor', 'iconColor'],
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
    height: 150rpx;
    flex-direction: row;
    align-items: flex-end;
    .header-left {
        position: absolute;
        z-index: 100;
        left: 0;
        height: 50px;
        width: 50px;
        justify-content: center;
        align-items: center;
        i {
            font-size: 18px;
            color: #333;
        }
    }
    .header-center {
        font-size: 15px;
        color: #000;
        width: 100%;
        height: 50px;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    .light {
        color: #fff;
    }
}
</style>

