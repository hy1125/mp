<template>
  <div class="yhpc-wrap">
    <HeaderBar title="隐患排查" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="content dispose-content">
        <div class="table">
          <div class="row">
            <div class="left">
              <p>存在的隐患</p>
            </div>
            <div class="right">
              <p>{{content.danger}}</p>
            </div>
          </div>
          <div class="row">
            <div class="top">
              <p>图片</p>
              <i class="iconfont icon-Group"></i>
            </div>
            <div class="bottom">
              <img :src="content.imgSrc" @error="imgError">
            </div>
          </div>
        </div>
      </div>
      <div class="explain-title">整改说明</div>
      <div class="content explain-content">
        <div class="table">
          <div class="row">
            <div class="top">
              <p>输入整改说明</p>
            </div>
            <div class="bottom">
              <textarea v-model="explain.text" auto-height />
            </div>
          </div>
          <div class="row">
            <div class="top">
              <p>添加图片</p>
            </div>
            <div class="bottom">
              <PhotoBox :photoDatas="datas" @onAddPhoto="handleAddPhoto" @onDelPhoto="handleDelPhoto"></PhotoBox>
            </div>
          </div>
          <div class="row">
            <div class="top">
              <p>请输入处置人</p>
            </div>
            <div class="bottom">
              <input v-model="explain.disponer" />
            </div>
          </div>
        </div>
      </div>
      <div class="finish-btn" @click="submit">整改完成</div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
