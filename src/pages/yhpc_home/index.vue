<template>
  <div class="yhpc-wrap">
    <HeaderBar title="隐患排查" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
        <div class="yhpc-home">
          <div class="yh-number">
            <img src="../../../static/yhpc_big_bg.png" alt="">
            <div class="safety-day-count-content-day">
              <i class="iconfont icon-yinhuanpaichazhilicopy"></i>
              <span>
                今日隐患上报数
                <span class="day-count">{{yhNumber}}</span>
                次
              </span>
            </div>
          </div>
          <div class="yh-log">
            <div @click="handleClick('/pages/yh_tell_log/main')">
              <p>隐患上报记录</p>
              <img src="../../../static/yhpc_little_bg.png" alt="">
            </div>
            <div @click="handleClick('/pages/yh_rectify_log/main')">
              <p>隐患整改记录</p>
              <img src="../../../static/yhpc_little_bg.png" alt="">              
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
