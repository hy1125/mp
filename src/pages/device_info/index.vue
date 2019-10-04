<template>
    <div class="device-info-wrap">
        <HeaderBar title="设备详情" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <!-- <div class="device-status">
                <div></div>
                <i class="iconfont icon-jinggao"></i>
                <p>运行中</p>
            </div> -->
            <div class="device-tab-bar">
                <TabBarCell :datas="tabDatas" @onPress="handleClickTab"></TabBarCell>
            </div>
            <div class="device-info-list" v-if="activedIndex === 0">
                <div class="table">
                  <div class="row" v-for="(data, index) in facilityInfo" :key="index" @click="handleClickFacilityInfo(data)">
                    <div class="left">
                      <div class="name">{{ data.name }}</div>
                    </div>
                    <div class="right">
                      <p :class="data.content == '点击查看' ? 'content-color' : ''">{{ data.content }}</p>
                    </div>
                    <div class="arrow" v-if="data.content == '点击查看'">
                        <img src="../../../static/icons/arrow.png" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="device-info-list device-info-list-remark" v-if="activedIndex === 1">
                <div class="table">
                  <div class="row" v-for="(data, index) in facilityRemark" :key="index" @click="handleClickFacilityRemark(data)">
                    <div class="left">
                      <div class="name">{{ data.content }}</div>
                    </div>
                    <div class="right">
                      <p>{{ data.time }}</p>
                    </div>
                    <div class="arrow">
                        <img src="../../../static/icons/arrow.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="add-yh-btn" @click="addRemark">
                    新增备注
                </div>
            </div>
            <div class="device-info-list device-info-list-record" v-if="activedIndex === 2">
                <div class="table">
                  <div class="row" v-for="(data, index) in overhaulDatas" :key="index" @click="handleClickFacilityRecord(data)">
                    <div class="left">
                      <div class="name" :style="index == 0 ? 'font-weight: 700' : 'font-weight: 500'">{{ data.title }}</div>
                    </div>
                    <div class="right">
                      <p :style="index == 0 ? 'font-weight: 700' : 'font-weight: 500'">{{ data.name }}</p>
                      <p :style="index == 0 ? 'font-weight: 700' : 'font-weight: 500'">{{ data.time }}</p>
                    </div>
                    <div class="arrow" v-if="index != 0">
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
@import url('./index.less');
</style>
