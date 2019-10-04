<template>
  <div class="container home-container">
    <HeaderBar title="设备管理" :iconLeft="true" iconClass="icon-unorderedlist" @clickEvent="handleClickHeader"></HeaderBar>
    <HeaderBar title="设备管理"></HeaderBar>
    <SearchBar placeholder="搜索设备" @onInput="handleInput"></SearchBar>
    <div class="filter-bar-warp flex">
      <div class="flex-1 filter-bar" :class="bar.active ? 'active' : ''" v-for="(bar, index) in filterBars" :key="index" @click="showFilter(bar)">
        {{ bar.name }}
      </div>
    </div>
    <div class="list-wrap border-top border-bottom" v-if="datas.length > 0">
      <div v-for="(item, index) in datas" :key="index">
        <DoubleList 
          :title="item.name" 
          :label="item.kks" 
          :value="deviceStatusFilter(item.status)" 
          :isLink="true" 
          :noBorder="index === datas.length - 1"
          @onPress="goDetail(item)"></DoubleList>
      </div>
    </div>
    <NoData v-if="datas.length <= 0"></NoData>
    <Loading v-if="loadMore"></Loading>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
