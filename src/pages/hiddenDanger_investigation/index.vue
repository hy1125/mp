<template>
    <div class="add-yh-wrap">
        <HeaderBar title="处理隐患" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
            <div class="content explain-content">
              <div class="table">
                <div class="gird-block" v-if="status == 3 || status == 4">
                  <div class="grid-notice">审核结果：<i>{{notice || "暂无"}}</i></div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>隐患类型</p>
                  </div>
                  <div class="bottom">
                    <span>{{wid}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>隐患详情</p>
                  </div>
                  <div class="bottom">
                    <span>{{waid}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>隐患照片</p>
                  </div>
                  <div class="bottom">
                    <img :src="picSrc">
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>隐患描述</p>
                  </div>
                  <div class="bottom">
                    <span>{{des}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>上报人</p>
                  </div>
                  <div class="bottom">
                    <span>{{name}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>上报时间</p>
                  </div>
                  <div class="bottom">
                    <span>{{time}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>处置结果</p>
                  </div>
                  <div class="bottom">
                    <picker @change="bindMultiPickerChange"
                      :value="data.multiIndex" :range="data.multiArray">
                      <view class="picker">
                        <span :class="chooseText != '选择处置结果' ? 'choose-text' : ''">{{chooseText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div>
                <div class="handle_block" v-if="status == 2 || status == 3 || status == 5 || status == 6">
                  <div class="row">
                    <div class="top">
                      <p>处置说明</p>
                    </div>
                    <div class="bottom">
                      <span>{{des2}}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="top">
                      <p>处置照片</p>
                    </div>
                    <div class="bottom">
                      <img :src="imgSrc">
                    </div>
                  </div>
                  <div class="row">
                    <div class="top">
                      <p>处置人</p>
                    </div>
                    <div class="bottom">
                      <span>{{man}}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="top">
                      <p>处置时间</p>
                    </div>
                    <div class="bottom">
                      <span>{{update_time}}</span>
                    </div>
                  </div>
                </div>
                <div class="row" v-if="status == 1 || status == 4">
                  <div class="top">
                    <p>处置说明（选填）</p>
                  </div>
                  <div class="bottom">
                    <textarea v-model="des2" placeholder="请描述处置内容"/>
                    <PhotoBox :photoDatas="datas" @onAddPhoto="handleAddPhoto" @onDelPhoto="handleDelPhoto"></PhotoBox>
                  </div>
                </div>

                <!-- <div class="row" v-if="status == 2">
                  <div class="top">
                    <p>处置结果</p>
                  </div>
                  <div class="bottom">
                    <picker @change="bindStatusPickerChange"
                      :value="statusData.statusIndex" :range="statusData.statusArray">
                      <view class="picker">
                        <span :class="statusText != '选择处置结果' ? 'choose-text' : ''">{{statusText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="finish-btn" @click="submit" v-if="status == 1 || status == 4">提交</div>
            <!-- <div class="finish-btn" @click="initiateAudit" v-if="status == 2">发起审核</div> -->
            <div class="btn_block"v-if="status == 2">
              <div class="btn" @click="initiateAudit(3)">通过</div>
              <div class="btn" @click="initiateAudit(4)">不通过</div>
            </div>
            <a class="finish-btn" href="/pages/hiddenDanger_home/main?act=2" v-if="status == 3 || status == 5 || status == 6">确定</a>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
