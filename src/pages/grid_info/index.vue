<template>
  <div class="jiance-wrap">
    <HeaderBar title="网格区域" titleColor="#fff" iconColor="#fff" :iconLeft="true" backgroundColor="#0187FB" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
      <div class="grid-block">
        <div class="page-title">
          <div class="grid-title">当前网格区域</div>
          <div class="grid-info">
            <img src="../../../static/logo.jpg"/>
            <div>
              <h3>{{gridTitle}}</h3>
              <h4>{{"网格编号：" + gridNumber}}</h4>
            </div>
          </div>
        </div>
      </div>
      <img :src="imgSrc">
      <p>发现隐患？点击按钮上报隐患</p>
      <div class="submit_btn" @click="newWorkOrder()">上报隐患</div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
