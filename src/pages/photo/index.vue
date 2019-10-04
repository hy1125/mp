<template>
  <div class="photo-container">
    <HeaderBar 
      backgroundColor="#303030"
      title="图片" 
      :iconLeft="true" 
      :isBack="true"
      iconColor="#fff"
      @clickEvent="handleClickHeader"></HeaderBar>
    <div class="photo-content">
      <img :src="path">
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
