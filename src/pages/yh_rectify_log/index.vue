<template>
  <div class="yhpc-wrap">
    <HeaderBar title="隐患整改记录" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="table-wrap">
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index" @click="handleClick(data)">
            <div class="left">
              <!-- <div class="name">{{ data.danger_title }}</div> -->
              <div class="name">隐患整改记录</div>
            </div>
            <div class="right">
              <p class="content">{{ data.danger_text }}</p>
              <p :class="data.danger_status == '已驳回' ? 'content_type3': (data.danger_status == '预处理' ? 'content_type1': 'content_type2')">{{ data.danger_status }}</p>
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
