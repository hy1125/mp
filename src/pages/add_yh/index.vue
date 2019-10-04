<template>
    <div class="add-yh-wrap">
        <HeaderBar title="隐患上报" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <div class="content explain-content">
              <div class="table">
                    <div class="row">
                      <div>
                        <p>标题</p>
                      </div>
                      <div>
                        <input v-model="form.title" />
                      </div>
                    </div>
                <div class="row">
                  <div class="top">
                    <p>填写隐患描述</p>
                  </div>
                  <div class="bottom">
                    <textarea v-model="form.description" auto-height />
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
                  <div>
                    <p>责任部门</p>
                  </div>
                  <div>
                    <picker
                      @change="bindMultiPickerChange"
                      :value="data.multiIndex"
                      :range="data.multiArray"
                    >
                      <view class="picker">
                        <span :class="chooseText != '选择部门' ? 'choose-text' : ''">{{chooseText}}</span>
                        <i class="iconfont icon-downarrow"></i>
                      </view>
                    </picker>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <p>上报人</p>
                  </div>
                  <div>
                    <input v-model="form.people" />
                  </div>
                </div>
              </div>
            </div>
            <div class="finish-btn" @click="submit">确认上报</div>
            <!-- <div class="add-form-wrap border-bottom">
                <ListCell name="设备名称" :value="name"></ListCell>
                <ListCell name="设备位置" value="A出口"></ListCell>
                <picker 
                    mode="date"
                    :value="form.disposalDate"
                    :start="endDate"
                    @change="bindDateChange">
                        <ListCell name="处置时限(日期)" :value="form.disposalDate || '请选择日期'" :isLink="true"></ListCell>
                </picker>
                <picker 
                    mode="time"
                    :value="form.disposalTime"
                    start="07:00" 
                    end="21:00"
                    @change="bindTimeChange">
                        <ListCell name="处置时限(时间)" :value="form.disposalTime || '请选择时间'" :isLink="true" :noBorder="true"></ListCell>
                </picker>
            </div>
            <TitleCell title="隐患描述"></TitleCell>
            <div class="add-form-wrap border-bottom add-textarea-wrap">
                <textarea class="add-textarea" placeholder="填写隐患描述" @input="handleInput"></textarea>
                <PhotoBox :photoDatas="datas" @onAddPhoto="handleAddPhoto" @onDelPhoto="handleDelPhoto"></PhotoBox>
            </div>
            <div class="add-button-sumbit">
                <ButtonCell text="确认上报" padding="padding: 0 15px" @onPress="submit"></ButtonCell>
            </div> -->
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
