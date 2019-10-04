<template>
    <div class="progress-cell">
        <div class="progress-wrap" :class="noBorder ? '' : 'border-bottom'">
            <div class="progress-name">
                <div>{{name}}</div>
                <i class="iconfont icon-question-circle-fill"></i>
            </div>
            <div class="progress-content">
                <div class="progress-value" :style="{ width: (value / maxValue) * 100 + '%', backgroundColor: backgroundColor }"></div>
                <div class="progress-value-ed" :style="{ width: (100 - (value / maxValue) * 100) + '%' }"></div>
            </div>
            <div class="progress-value-unit">{{value}}{{unit}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'maxValue', 'name', 'unit', 'noBorder', 'backgroundColor']
}
</script>

<style lang="less">
    .progress-cell {
        width: 100%;
        height: 44px;
        padding: 0 0 0 15px;
        box-sizing: border-box;
        .progress-wrap {
            width: 100%;
            height: 44px;
            flex-direction: row;
            .progress-name {
                height: 44px;
                align-items: center;
                width: 51px;
                justify-content: flex-start;
                flex-direction: row;
                div {
                    font-size: 14px;
                    color: #333;
                    margin-right: 4px;
                }
                i {
                    display: flex;
                    display: -webkit-box;
                    color: #ccc;
                    font-size: 14px;
                    justify-content: center;
                    align-items: center;
                }
            }
            .progress-content {
                height: 44px;
                align-items: center;
                flex: 1;
                .progress-value {
                    height: 8px;
                    border-radius: 8px 0 0 8px;
                }
                .progress-value-ed {
                    height: 8px;
                    background-color: #ccc;
                    border-radius: 0 8px 8px 0;
                }
            }
            .progress-value-unit {
                height: 44px;
                width: 60px;
                align-items: center;
                justify-content: flex-end;
                font-size: 14px;
                color: #333;
                padding-right: 15px;
            }
        }
    }
</style>
