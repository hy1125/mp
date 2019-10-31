<template>
  <div class="container home-true-container" :style="{paddingTop: h + 'px'}">
    <HeaderBar title="妈湾电厂"></HeaderBar>
    <div class="page-wrap">
      <swiper class="banner-wrap" autoplay indicator-dots indicator-color="#fff">
        <swiper-item>
          <img src="/static/banner@2x.png" alt="">
        </swiper-item>
        <swiper-item>
          <img src="/static/banner@2x.png" alt="">
        </swiper-item>
      </swiper>
      <div class="action-wrap">
        <div class="action-main">
          <!-- <div class="aciton-item-wrap" v-for="(item, index) in actionDatas" :key="index" @click="handleClick(item)">
            <i class="iconfont aciton-icon" :class="item.icon"></i>
            <div class="aciton-name">{{item.name}}</div>
          </div> -->
          <a class="aciton-item-wrap" href='/pages/overview/main'>
            <i class="iconfont aciton-icon icon-gailan"></i>
            <div class="aciton-name">电厂概览</div>
          </a>
          <div class="aciton-item-wrap" @click="handleClick()">
            <i class="iconfont aciton-icon icon-scan"></i>
            <div class="aciton-name">设备扫码</div>
          </div>
          <a class="aciton-item-wrap" href='/pages/grid_area/main'>
            <i class="iconfont aciton-icon icon-yinhuan-mian-"></i>
            <div class="aciton-name">网格区域</div>
          </a>
          <!-- <a class="aciton-item-wrap" href='/pages/add_yh/main'>
            <i class="iconfont aciton-icon icon-yinhuan-mian-"></i>
            <div class="aciton-name">隐患上报</div>
          </a> -->
          <a class="aciton-item-wrap" href='/pages/jiance/main'>
            <i class="iconfont aciton-icon icon-jiankong"></i>
            <div class="aciton-name">安全监测</div>
          </a>
          <a class="aciton-item-wrap" href='/pages/team/main'>
            <i class="iconfont aciton-icon icon-waixieguanli-"></i>
            <div class="aciton-name">外协管理</div>
          </a>
          <a class="aciton-item-wrap" href='/pages/contacts/main'>
            <i class="iconfont aciton-icon icon-tongxunlu"></i>
            <div class="aciton-name">通讯录</div>
          </a>
          <a class="aciton-item-wrap" href='/pages/grid_management/main'>
            <i class="iconfont aciton-icon icon-yinhuanpaichazhilicopy"></i>
            <div class="aciton-name">网格管理</div>
          </a>
          <a class="aciton-item-wrap" href='/pages/hiddenDanger_home/main'>
          <!-- <a class="aciton-item-wrap" href='/pages/grid_info/main'> -->
            <i class="iconfont aciton-icon icon-yinhuanpaichazhilicopy"></i>
            <div class="aciton-name">隐患排查</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
