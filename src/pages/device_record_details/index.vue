<template>
  <div class="yhpc-wrap">
    <HeaderBar title="记录详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="title">
          <p>{{info.title}}</p>
          <p>THE TITLE</p>
      </div>
      <div class="content">
          <img :src="info.img"  @error="imgError" alt="">
          <!-- {{content}} -->
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
