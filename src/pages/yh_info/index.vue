<template>
    <div class="yh-info-wrap">
        <HeaderBar title="隐患详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <StatusBar :type="yhDetail.status === 0 ? 'warning' : 'default'" :text="`隐患${yhStatusFilter(yhDetail.status)}`"></StatusBar>
            <div class="page-main border-bottom border-top">
                <ListCell name="上报人" :value="yhDetail.report"></ListCell>
                <ListCell name="设备名称" :value="yhDetail.name"></ListCell>
                <!-- <ListCell name="设备位置" value="A出口"></ListCell> -->
                <ListCell name="上报时间" :value="yhDetail.gmtCreate"></ListCell>
                <ListCell name="处置期限" :value="yhDetail.disposalTime"></ListCell>
                <ListCell name="处理状态" :value="yhStatusFilter(yhDetail.status)" :noBorder="true"></ListCell>
            </div>
            <TitleCell title="隐患描述"></TitleCell>
            <div class="add-form-wrap border-bottom add-textarea-wrap">
                <div class="add-textarea-text">{{yhDetail.description || '暂无描述'}}</div>
            </div>
            <TitleCell :title="yhDetail.disposalContext ? '处理人员回复' : '回复隐患上报'"></TitleCell>
            <div class="add-form-wrap border-bottom add-textarea-wrap">
                <textarea class="add-textarea" placeholder="填写回复内容" @input="handleReplyInput" v-if="!yhDetail.disposalContext"></textarea>
                <div class="add-textarea-text" v-else>{{yhDetail.disposalContext}}</div>
                <!-- <PhotoBox 
                    :photoDatas="replyDatas" 
                    @onAddPhoto="handleAddReplyPhoto" 
                    @onDelPhoto="handleDelReplyPhoto">
                </PhotoBox> -->
            </div>
            <TitleCell title="验收意见栏"></TitleCell>
            <div class="add-form-wrap border-bottom add-textarea-wrap">
                <textarea class="add-textarea" placeholder="填写验收意见" @input="handleCheckedInput" v-if="!yhDetail.opinion"></textarea>
                <div class="add-textarea-text" v-else>{{yhDetail.opinion}}</div>
                <!-- <PhotoBox 
                    :photoDatas="checkedDatas" 
                    @onAddPhoto="handleAddCheckedPhoto" 
                    @onDelPhoto="handleDelCheckedPhoto">
                </PhotoBox> -->
            </div>
            <div class="add-button-sumbit" v-if="!(yhDetail.opinion && yhDetail.disposalContext)">
                <ButtonCell :text="submitText" padding="padding: 0 15px" @onPress="submit"></ButtonCell>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
