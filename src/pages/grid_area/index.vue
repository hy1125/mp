<template>
  <div class="yhpc-wrap">
    <HeaderBar title="网格区域列表" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap" :style="{paddingTop: statusBarHeight + 50 + 'px'}">
        <div class="yhpc-home">
          <div class="yh-log" :style="{top: statusBarHeight + 'px',height: '50px'}">
            <div>
              <label>网格编号：</label>
              <input type="text" v-model="number" v-on:input="searchGridArea"/>
            </div>
            <div>
              <label>网格名称：</label>
              <input type="text" v-model="area" v-on:input="searchGridArea"/>
            </div>
          </div>
        </div>

        <div class="yhpc_block">
          <div class="yhpc_item" v-for="(item, index) in areaList" :key="index">
            <div class="yhpc_info">
              <p>{{"网格名称："+item.area_3}}</p>
              <p>{{"网格编号："+item.number}}</p>
            </div>
            <label @click="submitHandle(item.id)">{{status}}</label>
          </div>
        </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
