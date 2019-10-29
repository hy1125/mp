<template>
  <div class="jiance-wrap">
    <HeaderBar title="微网格" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
      <div class="page-title">
        <img src="../../../static/logo.jpg"/>
        <div class="grid-title">{{gridTitle}}</div>
        <div class="grid-number">{{"网格编号：" + gridNumber}}</div>
      </div>
      <div class="submit_btn" @click="newWorkOrder()">新建工作单</div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
