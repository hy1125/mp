<template>
    <div class="loading-wrap">
        <div class="loading-main">
            <img src="/static/loading.gif">
        </div>
    </div>
</template>

<script>
export default {
    props: ['show']
}
</script>

<style lang="less">
    .loading-wrap {
        width: 100%;
        .loading-main {
            width: 100%;
            height: 56px;
            justify-content: center;
            align-items: center;
            img {
                height: 32px;
                width: 32px;
                display: flex;
                display: -webkit-flex;
            }
        }
    }
</style>
