<template>
    <div class="bind-device-wrap">
        <HeaderBar title="二维码绑定" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <div class="page-main border-bottom">
                <ListCell name="设备类型" value="选择设备类型" :isLink="true" @onPress="deviceTypeFn"></ListCell>
                <ListCell name="设备编号" value="填写设备编号":isLink="true" @onPress="deviceNoFn"></ListCell>
                <ListCell name="部门分组" value="选择部门分组":isLink="true" :noBorder="true" @onPress="deviceGroupFn"></ListCell>
            </div>
            <div class="add-button-sumbit">
                <ButtonCell text="确认绑定" padding="padding: 0 15px" @onPress="submit"></ButtonCell>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
