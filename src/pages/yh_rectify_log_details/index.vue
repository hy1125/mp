<template>
  <div class="yhpc-wrap">
    <HeaderBar title="整改隐患详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="table-wrap">
        <div class="table">
          <div class="row border-bottom" v-for="(data, index) in list" :key="index">
            <div class="left">
              <div class="name">{{ data.name }}</div>
              <i v-if="index == 1" class="iconfont icon-Group"></i>
            </div>
            <div class="right">
                <img v-if="index == 1" :src="data.location" @error="imgError('list')" alt="">
                <p v-if="index != 1">{{ data.location }}</p>
            </div>
          </div>
        </div>
        <div class="table">
          <div class="row border-bottom" v-for="(data, index) in list2" :key="index">
            <div class="left">
              <div class="name">{{ data.name }}</div>
              <i v-if="index == 1" class="iconfont icon-Group"></i>
            </div>
            <div class="right">
                <img v-if="index == 1" :src="data.location" @error="imgError('list2')">
                <p v-if="index != 1">{{ data.location }}</p>
            </div>
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
