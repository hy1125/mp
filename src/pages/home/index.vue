<template>
  <div class="container home-true-container">
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
          <div class="aciton-item-wrap" v-for="(item, index) in actionDatas" :key="index" @click="handleClick(item)">
            <i class="iconfont aciton-icon" :class="item.icon"></i>
            <div class="aciton-name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
