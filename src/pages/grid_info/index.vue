<template>
  <div class="jiance-wrap">
    <HeaderBar title="微网格" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="page-title">
        <img src="../../../static/logo.jpg"/>
        <div class="grid-title">{{gridTitle}}</div>
        <div class="grid-number">{{"网格编号：" + gridNumber}}</div>
      </div>
      <a class="submit_btn" href='/pages/add_yh/main'>新建工作单</a>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
