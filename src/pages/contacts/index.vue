<template>
  <div class="contacts-wrap">
    <HeaderBar title="通讯录" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap" :style="{paddingTop: statusBarHeight + 'px'}">
      <div class="top">
        <div class="tab-wrap">
          <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="tab.active ? 'active' : ''" @click="switchTab(tab, index)">
            {{ tab.title }}
          </div>
        </div>
        <!-- <div class="filter" @click="switchDepartment">
          
        </div> -->
        <picker mode="selector" @change="departmentChange" :value="departmentIndex" :range="departments">
          <view class="filter">
            {{ departments[departmentIndex] || '筛选部门'}}
          </view>
        </picker>
      </div>
      <scroll-view
          scroll-y 
          @scrolltolower="allScrollData"
          style="height: 72vh"
      >
      <div class="noData" v-if="users.length <= 0">暂无数据</div>
        <div class="list-wrap" v-for="(item, indexs) in users" :key="indexs">
        <!-- <div class="list-wrap"> -->
          <!-- <div class="user" v-for="(user, index) in users" :key="index"> -->
          <div class="user" v-for="(user, index) in item" :key="index">
            <div class="avatar">
              <img :src="user.photos" @error="imgError(indexs,index)" alt="">
            </div>
            <div class="info-wrap">
              <div class="name">
                {{ user.name }}
              </div>
              <div class="bottom">
                <div class="department">
                  {{ user.department }}
                </div>
                <div class="phone" @click="callPhone(user.phone)">
                  <i class="iconfont icon-phone"></i>
                  <span>{{ user.phone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
      
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
