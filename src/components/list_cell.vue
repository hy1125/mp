<template>
    <div class="list-cell">
        <div class="list-cell-content" @click="handleClick">
            <div class="list-name">
                <div>
                    <slot></slot>
                </div>
                <p>{{name}}</p>
            </div>
            <div class="list-value">
                <div>{{value}}</div>
                <i class="iconfont icon-right" v-if="isLink"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'noBorder', 'isLink'],
    methods: {
        handleClick() {
            this.$emit('onPress');
        }
    }
}
</script>

<style lang="less">
    .list-cell {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0 0 15px;
        &:active {
            background-color: #f1f1f1;
        }
        .list-cell-content {
            width: 100%;
            height: 44px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .list-name {
                font-size: 14px;
                color: #333;
                font-weight: 600;
                align-items: center;
                div {
                    width: 50rpx;
                }
            }
            .list-value {
                font-size: 14px;
                color: #666;
                padding-right: 15px;
                flex-direction: row;
                height: 44px;
                align-items: center;
                i {
                    display: flex;
                    display: -webkit-flex;
                    margin-left: 10px;
                }
            }
        }
    }
</style>
