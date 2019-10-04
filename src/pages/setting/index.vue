<template>
    <div class="setting-wrap">
        <HeaderBar title="设置" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <div class="page-main border-bottom border-top">
                <ListCell name="关于妈湾电厂" :isLink="true" @onPress="about"></ListCell>
                <ListCell name="退出账号" :isLink="true" :noBorder="true" @onPress="logout"></ListCell>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
