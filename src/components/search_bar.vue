<template>
    <div class="search-bar">
        <div class="search-item">
            <i class="iconfont icon-search"></i>
            <input type="text" :placeholder="placeholder || '搜索内容'" v-model="value" @input="handleInput"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['placeholder'],
    data() {
        return {
            value: ''
        }
    },
    methods: {
        handleInput() {
            this.$emit('onInput', this.value);
        }
    }
}
</script>


<style lang="less">
.search-bar {
    width: 100%;
    height: 80rpx;
    box-sizing: border-box;
    padding: 0 10rpx;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    .search-item {
        width: 100%;
        height: 60rpx;
        background-color: #ededed;
        border-radius: 30rpx;
        position: relative;
        justify-content: center;
        flex-direction: column;
        i {
            position: absolute;
            left: 0;
            width: 60rpx;
            height: 60rpx;
            margin-left: 10rpx;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 40rpx;
            display: flex;
            display: -webkit-flex;
        }
        input {
            height: 36px;
            padding-left: 40px;
            font-size: 16px;
            color: #666;
        }
    }
}
</style>

