<template>
    <div class="add-yh-wrap">
        <HeaderBar title="上报隐患" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
            <div class="content explain-content">
              <div class="table">
                <div class="row">
                  <div class="top">
                    <p>网格隐患识别工作单类型</p>
                  </div>
                  <div class="bottom">
                    <picker @change="typePickerChange"
                      :value="typeData.typeIndex" :range="typeData.typeArray">
                      <view class="picker">
                        <span :class="typeText != '选择工作单类型' ? 'choose-text' : ''">{{typeText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>网格隐患识别工作单详情</p>
                  </div>
                  <div class="bottom">
                    <picker @change="detailPickerChange"
                      :value="detailData.detailIndex" :range="detailData.detailArray">
                      <view class="picker">
                        <span :class="detailText != '选择工作单详情' ? 'choose-text' : ''">{{detailText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>选择处置部门</p>
                  </div>
                  <div class="bottom">
                    <picker @change="departmentPickerChange"
                      :value="departmentData.departmentIndex" :range="departmentData.departmentArray">
                      <view class="picker">
                        <span :class="departmentText != '选择处置部门' ? 'choose-text' : ''">{{departmentText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="top">
                    <p>选择处置网格员</p>
                  </div>
                  <div class="bottom">
                    <picker @change="departmentPickerChange"
                      :value="data.departmentIndex" :range="data.departmentArray">
                      <view class="picker">
                        <span :class="chooseText != '选择处置网格员' ? 'choose-text' : ''">{{chooseText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div> -->
                <div class="row">
                  <div class="top">
                    <p>选择处置网格员</p>
                  </div>
                  <div class="bottom">
                    <picker @change="bindMultiPickerChange"
                      :value="data.multiIndex" :range="data.multiArray">
                      <view class="picker">
                        <span :class="chooseText != '选择处置网格员' ? 'choose-text' : ''">{{chooseText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>添加图片</p>
                  </div>
                  <div class="bottom">
                    <PhotoBox :photoDatas="datas" @onAddPhoto="handleAddPhoto" @onDelPhoto="handleDelPhoto"></PhotoBox>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>隐患描述</p>
                  </div>
                  <div class="bottom">
                    <textarea v-model="form.des" placeholder="填写隐患描述"/>
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>存在隐患网格区域</p>
                  </div>
                  <div class="bottom">
                    <span>{{danger_area}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="finish-btn" @click="submit">确认上报</div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
