<template>
    <div class="tab-bar-wrap">
        <div class="tab-bar-content">
            <div class="tab-bar-item" 
                :class="item.actived ? 'tab-actived' : ''" 
                v-for="(item, index) in datas" :key="index"
                @click="handleClick(index)">
                <div class="tab-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['datas'],
    methods: {
        handleClick(index) {
            this.$emit('onPress', index);
        }
    }
}
</script>

<style lang="less">
    .tab-bar-wrap {
        width: 100%;
        padding: 0 85rpx;
        box-sizing: border-box;
        .tab-bar-content {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            .tab-bar-item {
                height: 68rpx;
                width: 180rpx;
                justify-content: center;
                align-items: center;
                background: #DDDDDD;
                border-radius: 34rpx;
                &.tab-actived {
                    border:2rpx solid rgba(255,136,30,1);
                    background: #fff;
                    .tab-name {
                        color: #FF881E;                        
                    }
                }
                .tab-name {
                    color:rgba(102,102,102,1);
                    font-size: 14px;
                }
            }
        }
    }
</style>
