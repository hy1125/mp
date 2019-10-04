<template>
    <div class="add-yh-wrap">
        <HeaderBar title="增加备注" :iconLeft="true" :isBack="true" @clickEvent="handleClickHeader"></HeaderBar>
        <div class="page-wrap">
            <div class="content explain-content">
              <div class="table">
                <div class="row">
                  <div>
                    <p>备注时间</p>
                  </div>
                  <div>
                    <input v-model="form.time" />
                  </div>
                </div>
                <div class="row">
                  <div>
                    <p>备注人</p>
                  </div>
                  <div>
                    <input v-model="form.people" />
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>备注内容</p>
                  </div>
                  <div class="bottom">
                    <textarea v-model="form.content" auto-height />
                  </div>
                </div>
                <div class="row">
                  <div class="top">
                    <p>添加图片</p>
                  </div>
                  <div class="bottom">
                    <PhotoBox :photoDatas="datas" @onAddPhoto="handleAddPhoto" @onDelPhoto="handleDelPhoto"></PhotoBox>
                  </div>
                </div>
              </div>
            </div>
            <div class="finish-btn" @click="submit">提交</div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url('./index.less');
</style>
