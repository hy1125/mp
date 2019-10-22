<template>
  <div class="jiance-wrap">
    <HeaderBar title="网格管理" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap">
      <div class="page-title">
        <img src="../../../static/logo.jpg"/>
        <div class="grid-title">{{gridTitle}}</div>
        <!-- <div class="grid-number">{{"网格编号：" + gridNumber}}</div> -->
      </div>
      <!-- <div class="table-wrap">
        <div class="table-title">{{tableTitle1}}</div>
        <div class="gird-block">
          <div class="grid-operator" v-for="(item, operatorIndex) in operatorList" :key="operatorIndex">{{"网格员"+(operatorIndex+1)+"：" + item.name}}<i>{{item.number}}</i></div>
        </div>
      </div> -->
      <div class="table-wrap">
        <!-- <div class="table-title">{{tableTitle2}}</div> -->
        <div class="table">
          <div class="row" v-for="(data, index) in list" :key="index" @click="handleClick(data.id)">
            <img class="row-icon" src="../../../static/icons/team.png">
            <div class="left">
              <div class="name">{{ data.name }}</div>
              <div><i>{{"网格员1：" + data.operator1}}</i><i>{{"网格员2：" + data.operator2}}</i></div>
              <div>{{"网格编号：" + data.id }}</div>
            </div>
            <div class="arrow">
                <img src="../../../static/icons/arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="table-wrap introduction-block">
        <div class="table-title">{{tableTitle3}}</div>
        <div class="gird-block">
          <div class="grid-introduction">{{introduction}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
