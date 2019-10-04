<template>
  <div class="jiance-wrap">
    <HeaderBar title="视频监测" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="table-wrap">
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index" @click="handleClick(data)">
            <div class="left">
              <div class="name">{{ data.name }}</div>
              <div>{{ data.location }}</div>
            </div>
            <div class="right">
              {{ data.time }}
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
