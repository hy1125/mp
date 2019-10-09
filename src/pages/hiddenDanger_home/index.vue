<template>
  <div class="yhpc-wrap">
    <HeaderBar title="隐患排查单" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
        <div class="yhpc-home">
          <div class="yh-log">
            <div @click="handleClick('1')">
              <p :class="act == '1' ? 'active' : ''">待办</p>
            </div>
            <div @click="handleClick('2')">
              <p :class="act == '2' ? 'active' : ''">审核</p>
            </div>
          </div>
        </div>

        <div class="yhpc_block">
          <div class="yhpc_item" v-for="(item, index) in list" :key="index">
            <span class="yhpc_status">{{item.status_name}}</span>
            <div class="yhpc_info">
              <p>{{"隐患类型："+item.wid}}</p>
              <p>{{"隐患详情："+item.waid}}</p>
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
