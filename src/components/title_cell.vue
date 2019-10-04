<template>
    <div class="title-cell-wrap">
        <div class="title-cell">{{title}}</div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="less">
    .title-cell-wrap {
        width: 100%;
        height: 44px;
        align-items: center;
        .title-cell {
            font-size: 14px;
            color: rgb(121, 120, 120);
            padding-left: 15px;
        }
    }
</style>
