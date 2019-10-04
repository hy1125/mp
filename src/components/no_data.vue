<template>
    <div class="no-data-wrap">
        <div class="no-data">————— {{text || '暂无内容'}} —————</div>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="less">
    .no-data-wrap {
        width: 100%;
        align-items: center;
        justify-content: center;
        height: 100px;
        .no-data {
            font-size: 14px;
            color: #ccc;
        }
    }
</style>
