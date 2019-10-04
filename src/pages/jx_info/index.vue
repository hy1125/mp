<template>
    <div class="jx-info-wrap">
        <HeaderBar title="检修详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <div class="page-main border-bottom border-top">
                <ListCell name="检修人" :value="jxDetail.name"></ListCell>
                <ListCell name="上报日期" :value="jxDetail.gmtCreate"></ListCell>
                <ListCell name="处置期限" :value="jxDetail.overhaulTime"></ListCell>
                <ListCell name="联系电话" :value="jxDetail.contact" :isLink="true" @onPress="callPhone(jxDetail.contact)"></ListCell>
                <!-- <ListCell name="设备位置" value="无" :noBorder="true"></ListCell> -->
            </div>
            <TitleCell title="检修备注"></TitleCell>
            <div class="add-form-wrap border-bottom add-textarea-wrap">
                <div class="add-textarea-text">{{jxDetail.description || '暂无备注'}}</div>
            </div>
            <TitleCell title="检修进度"></TitleCell>
            <div class="time-line-wrap">
                <TimeLineBar :timelineDatas="datas"></TimeLineBar>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
