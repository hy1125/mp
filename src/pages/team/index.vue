<template>
  <div class="container home-container" :style="{paddingTop: statusBarHeight + 'px'}">
    <!-- <HeaderBar title="外协员工管理" :iconLeft="true" iconClass="icon-unorderedlist" @clickEvent="handleClickHeader"></HeaderBar> -->
    <HeaderBar title="外协员工管理" :iconLeft="true" :isBack="true" @clickEvent="goBack"></HeaderBar>
    <!-- <SearchBar placeholder="搜索员工" @onInput="handleInput"></SearchBar> -->
    <div class="search">
        <div>
            <picker
              mode="multiSelector"
              @change="bindMultiPickerChange"
              @columnchange="bindMultiPickerColumnChange"
              :value="data.multiIndex"
              :range="data.multiArray"
            >
              <view class="picker">
                <i class="iconfont icon-liebiao"></i>
              </view>
            </picker>
        </div>
        <div>
            <i class="iconfont icon-icon-seach-no"></i>
            <input @confirm="searchStaff" placeholder="请输入姓名或工号或单位名称查询" confirm-type="search" />
        </div>
    </div>
    <div class="list-wrap border-top border-bottom" v-if="datas.length > 0">
      <div v-for="(item, index) in datas" :key="index">
        <DoubleList 
          :title="item.name" 
          :label="item.company"
          :tips="item.qualification"
          :isLink="true" 
          :noBorder="index === datas.length - 1"
          @onPress="goDetail(item)"></DoubleList>
      </div>
    </div>
    <NoData v-if="datas.length <= 0"></NoData>
    <Loading v-if="loadMore"></Loading>
    
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
