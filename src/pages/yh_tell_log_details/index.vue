<template>
  <div class="yhpc-wrap">
    <HeaderBar title="上报隐患详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="table-wrap">
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index">
            <div class="left">
              <div class="name">{{ data.name }}</div>
              <i v-if="index == 1" class="iconfont icon-Group"></i>
            </div>
            <div class="right">
                <img v-if="index == 1" @error="imgError" :src="data.location" alt="">
                <p v-if="index != 1">{{ data.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="yh-dispose-btn" @click="handleClick('/pages/yh_dispose/main')">
        隐患处置
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
