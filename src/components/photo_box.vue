<template>
    <div class="photo-box-wrap">
        <div class="photo-box-item" v-for="(item, index) in photoDatas" :key="index">
            <img class="photo-item" :src="item" @click="goCheckePhoto(item)" @longpress="showDelBtnFn">
            <i class="iconfont icon-delete photo-item del-button" @click="delPhoto(index)" v-if="showDelBtn"></i>
        </div>
        <div class="photo-box-item add-button" 
            @click="addPhoto" 
            v-if="showAddBtn">
            <i class="iconfont icon-plus"></i>
        </div>
    </div>
</template>

<script>
export default {
  props: ["photoDatas", "onlyRead"],
  data() {
    return {
      cellWidth: 0,
      showDelBtn: true
    };
  },
  computed: {
    showAddBtn() {
        if(this.onlyRead) {
            return false;
        } else {
            return this.photoDatas.length >= 5 ? false : true;
        }
        
    }
  },
  created() {
    this.$nextTick(() => {
      this.getClientWidth();
    });
  },
  methods: {
    getClientWidth() {
      const clientWidth = wx.getSystemInfoSync().windowWidth;
      this.cellWidth = (clientWidth - 30) / 3 - 2;
    },
    addPhoto() {
        const datas = this.photoDatas;
        const self = this;
        if(!this.onlyRead) { 
            wx.chooseImage({
                count: 5 - datas.length,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"],
                success(uploadRes) {
                    let imgBase = "";
                    self.showDelBtn = true;
                    wx.getFileSystemManager().readFile({
                      filePath: uploadRes.tempFilePaths[0], //选择图片返回的相对路径
                      encoding: 'base64', //编码格式
                      success: res => { //成功的回调
                        // console.log('data:image/png;base64,' + res.data)
                        imgBase = 'data:image/png;base64,' + res.data
                        const tempFilePaths = uploadRes.tempFilePaths;
                        self.$emit('onAddPhoto', tempFilePaths,imgBase);
                      }
                    })
                    
                }
            });
        }
    },
    goCheckePhoto(path) {
        wx.navigateTo({
            url: `/pages/photo/main?path=${path}&showDel=${1}`
        })
    },
    showDelBtnFn() {
        if(!this.onlyRead) {
            this.showDelBtn = true;
        }
    },
    delPhoto(index) {
        const self = this;
        if(!this.onlyRead) { 
            wx.showModal({
                title: '提示',
                content: '确定删除该图片吗？',
                success(res) {
                    if (res.confirm) {
                        self.$emit('onDelPhoto', index);
                        self.showDelBtn = false;
                    }
                }
            })
        }
    }
  }
};
</script>

<style lang="less">
.photo-box-wrap {
  width: 100%;
  flex-wrap: wrap;
  .photo-box-item {
    margin: 0 38rpx 10rpx 0;
    position: relative;
    width: 100rpx;
    height: 100rpx;
    &.add-button {
      background-color: #bbb;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      width: 34rpx;
      height: 34rpx;
      position: absolute;
      top: -65rpx;
      right: 0;
      i {
        display: flex;
        display: -webkit-flex;
        color: #fff;
        font-size: 32px;
      }
    }
    .photo-item {
      display: flex;
      display: -webkit-flex;
      width: 100rpx;
      height: 100rpx;
    }
    .del-button {
        position: absolute;
        z-index: 20;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 32px;
        color: #b80e0e;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
  }
}
</style>
