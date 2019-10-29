<template>
  <div class="overview-wrap">
    <HeaderBar title="电厂概览" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
    <div class="page-wrap" :style="{paddingTop: h + 'px'}">
      <!-- <div class="safety-run-wrap">
        <div class="safety-day-count">
          <div class="safety-day-count-bg">
            <img src="../../../static/overview_bg.png" alt="">
          </div>
          <div class="safety-day-count-content">
            <div class="safety-day-count-content-day">
              <i class="iconfont icon-i-safe"></i>
              <span class="">
                安全运行
                <span class="day-count">1351</span>
                天
              </span>
            </div>
            <div class="safety-day-count-content-line"></div>
            <div class="safety-day-count-content-text">今日概览</div>
            <div class="overview-count-wrap">
              <div class="overview-count" v-for="(overview, index) in overviewCounts" :key="index">
                <div class="count">{{ overview.count }}</div>
                <div class="label">{{ overview.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="table-wrap compare-wrap">
        <div class="table">
          <div class="row" v-for="(compare, index) in compareCounts" :key="index">
            <span class="label">{{ compare.label }}</span>
            <span class="count">{{ compare.count }}</span>
          </div>
        </div>
      </div> -->
      <div class="table-wrap">
        <div class="title">妈湾电力环保数据</div>
        <div class="title-list">
          <div class="title-list-count green-title" v-for="(green, index) in greenDatas" :key="index">
            <div class="label">{{ green.label }}</div>            
            <div class="count">{{ green.count }}</div>
          </div>
        </div>
        <div class="table">
          <div class="row green-info" v-for="(quota, index) in productQuotas" :key="index">
            <div v-for="(value, quotaIndex) in quota" :key="quotaIndex">
              {{ value }}
            </div>
          </div>
        </div>
      </div>
      <div class="table-wrap">
        <div class="title">电力实时信息</div>
        <div class="table power-big-title">
          <div class="row" v-for="(value, index) in powerTitle" :key="index">
            {{ value }}
          </div>
        </div>
        <scroll-view
          scroll-x 
          style="width: 100%;white-space: nowrap;"
        >
          <div class="scroll-view-item_H">
            <div class="title-list power-title">
              <div class="title-list-count" v-for="(power, index) in powerDatasTitle" :key="index">
                <div class="label">{{ power.label }}</div>            
                <div class="count">{{ power.count }}</div>
              </div>
            </div>
            <div class="table">
              <div class="row power-data" v-for="(environment, index) in powerDatas" :key="index">
                <div v-for="(value, environmentIndex) in environment" :key="environmentIndex">
                  {{ value }}
                </div>
              </div>
            </div>
          </div>
        </scroll-view>
      </div>
  </div>
    </div>
    
    
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.less");
</style>
