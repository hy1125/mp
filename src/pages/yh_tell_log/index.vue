<template>
  <div class="yhpc-wrap">
    <HeaderBar title="隐患上报记录" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="table-wrap">
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index" @click="handleClick(data)">
            <div class="left">
              <div class="name">隐患上报记录</div>
              <!-- <div class="name">{{ data.danger_title }}</div> -->
            </div>
            <div class="right">
              <p>{{ data.danger_text }}</p>
            </div>
            <div class="arrow">
                <img src="../../../static/icons/arrow.png" alt="">
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
