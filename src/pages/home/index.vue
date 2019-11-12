<template>
  <div class="container home-true-container" :style="{paddingTop: h + 'px'}">
    <HeaderBar title="妈湾电厂" leftText="注销" :iconLeft="true" @clickEvent="handleClickHeader"></HeaderBar>
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
            <!-- <i class="iconfont aciton-icon icon-gailan"></i> -->
            <img src="/static/index/overview.png">
            <div class="aciton-name">
              <h3>实时信息</h3>
              <p>电力、环保实时信息</p>
            </div>
          </a>
          <div class="aciton-item-wrap" @click="handleClick()">
            <!-- <i class="iconfont aciton-icon icon-scan"></i> -->
            <img src="/static/index/scan.png">
            <div class="aciton-name">
              <h3>扫码</h3>
              <p>网格区域、上报隐患、设备信息</p>
            </div>
          </div>
          <a class="aciton-item-wrap" href='/pages/grid_area/main'>
            <!-- <i class="iconfont aciton-icon icon-yinhuan-mian-"></i> -->
            <img src="/static/index/grid_area.png">
            <div class="aciton-name">
              <h3>网格区域</h3>
              <p>查看网格区域</p>
            </div>
          </a>
          <!-- <a class="aciton-item-wrap" href='/pages/add_yh/main'>
            <i class="iconfont aciton-icon icon-yinhuan-mian-"></i>
            <div class="aciton-name">隐患上报</div>
          </a> -->
          <a class="aciton-item-wrap" href='/pages/jiance/main'>
            <!-- <i class="iconfont aciton-icon icon-jiankong"></i> -->
            <img src="/static/index/jiance.png">
            <div class="aciton-name">
              <h3>视频监测</h3>
              <p>视频预警</p>
            </div>
          </a>
          <a class="aciton-item-wrap" href='/pages/team/main'>
            <!-- <i class="iconfont aciton-icon icon-waixieguanli-"></i> -->
            <img src="/static/index/team.png">
            <div class="aciton-name">
              <h3>外协管理</h3>
              <p>管理外协人员</p>
            </div>
          </a>
          <a class="aciton-item-wrap" href='/pages/contacts/main'>
            <!-- <i class="iconfont aciton-icon icon-tongxunlu"></i> -->
            <img src="/static/index/contacts.png">
            <div class="aciton-name">
              <h3>通讯录</h3>
              <p>厂区员工通讯录</p>
            </div>
          </a>
          <a class="aciton-item-wrap" href='/pages/grid_management/main'>
            <!-- <i class="iconfont aciton-icon icon-yinhuanpaichazhilicopy"></i> -->
            <img src="/static/index/grid_management.png">
            <div class="aciton-name">
              <h3>网格员架构</h3>
              <p>查看网格员信息</p>
            </div>
          </a>
          <a class="aciton-item-wrap" href='/pages/hiddenDanger_home/main'>
          <!-- <a class="aciton-item-wrap" href='/pages/grid_info/main'> -->
            <!-- <i class="iconfont aciton-icon icon-yinhuanpaichazhilicopy"></i> -->
            <img src="/static/index/hiddenDanger_home.png">
            <div class="aciton-name">
              <h3>隐患排查单</h3>
              <p>处置隐患</p>
            </div>
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
