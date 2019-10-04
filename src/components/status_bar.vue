<template>
    <div class="status-bar-wrap" :class="type">
        <div class="status-text">{{text}}</div>
    </div>
</template>

<script>
export default {
    props: ['type', 'text']
}
</script>

<style lang="less">
    .status-bar-wrap {
        width: 100%;
        height: 32px;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 64px;
        z-index: 100;
        &.default {
            background-color: #549ae6;
        }
        &.warning {
            background-color: #d6031e;
        }
        .status-text {
            color: #fff;
            font-size: 14px;
        }
    }
</style>
