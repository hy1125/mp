<template>
  <div class="yhpc-wrap">
    <HeaderBar title="锅炉水处理设备" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
        <img src="../../../static/banner@2x.png" alt="">
      <div class="title">
          <p>标题标题</p>
          <p>THE TITLE</p>
      </div>
      <div class="content">
          {{content}}
      </div>
      <div class="title">
          <p>标题标题</p>
          <p>THE TITLE</p>
      </div>
      <div class="content">
          {{content}}
      </div>
      <div class="login" @click="toLogin">
          用户登录
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
