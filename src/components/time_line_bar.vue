<template>
    <div class="time-line-bar border-bottom border-top">
        <div class="time-line-item" v-for="(item, index) in timelineDatas" :key="index">
            <div class="time-circle-wrap">
                <div class="time-circle"></div>
                <!-- <div class="time-line" :class="index != 0 ? '_top' : ''" :style="{ height: (index === 0 ? 28 : 56) + 'px', }"></div> -->
            </div>
            <div class="time-line-content" :class="index === timelineDatas.length - 1 ? '' : 'border-bottom'">
                <div class="time-line-name">{{item.name}}</div>
                <div class="time-line-time">{{item.time}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['timelineDatas']
}
</script>

<style lang="less">
    .time-line-bar {
        width: 100%;
        flex-direction: column;
        .time-line-item {
            width: 100%;
            height: 56px;
            flex-direction: row;
            .time-circle-wrap {
                height: 56px;
                width: 56px;
                justify-content: center;
                align-items: center;
                position: relative;
                .time-circle {
                    width: 10px;
                    height: 10px;
                    background-color: #549ae6;
                    border-radius: 10px;
                    position: absolute;
                    z-index: 10;
                }
                .time-line {
                    position: absolute;
                    bottom: 0;
                    width: 2px;
                    background-color: #ebebeb;
                    z-index: 9;
                    &._top {
                        top: 0;
                    }
                }
            }
            .time-line-content {
                flex-direction: column;
                height: 56px;
                justify-content: center;
                flex: 1;
                .time-line-name {
                    font-size: 14px;
                    color: #333;
                }
                .time-line-time {
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
</style>
