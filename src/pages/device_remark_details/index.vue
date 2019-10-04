<template>
  <div class="yhpc-wrap">
    <HeaderBar title="设备详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="table-wrap">
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index">
            <div class="left">
              <div class="name">{{ data.name }}</div>
            </div>
            <div class="right">
                <img v-if="index == 3" :src="data.location" alt="">
                <p v-if="index != 3">{{ data.location }}</p>
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
