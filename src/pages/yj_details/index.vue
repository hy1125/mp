<template>
  <div class="jiance-wrap">
    <HeaderBar title="预警详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
      <div class="table-wrap">
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index">
            <div class="left">
              <div class="name">{{ data.name }}</div>
            </div>
            <div class="right">
                <img v-if="index == 4" src="../../../static/banner@2x.png" alt="">
                <p v-if="index != 4">{{ data.location }}</p>
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
