<template>
    <div class="double-list-wrap" @click="handleClick">
        <div class="double-list-content" :class="noBorder ? '' : 'border-bottom'">
            <div class="double-list-left">
                <div class="list-title">{{title.length >= 10 ? subTitile : title}}</div>
                <div class="list-lable">{{label}}</div>
            </div>
            <div class="arrow">
                <div class="list-tips">{{tips}}</div>
                <img src="../../static/icons/arrow.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title", "label", "value", "isLink", "noBorder","tips"],
  computed: {
      subTitile() {
          return `${this.title.substring(0, 10)}...`;
      }
  },
  methods: {
      handleClick() {
          this.$emit('onPress');
      }
  }
};
</script>


<style lang="less">
.double-list-wrap {
    width: 100%;
    height: 60px;
    // background-color: #fff;
    padding-left: 15px;
    box-sizing: border-box;
    position: relative;
    &:active {
        background-color: #f1f1f1;
    }
    .double-list-content {
        width: 100%;
        height: 60px;
        justify-content: space-between;
        .double-list-left {
            height: 60px;
            flex-direction: column;
            justify-content: center;
            .list-title {
                font-size: 14px;
                margin-bottom: 10rpx;
                color: #333;
                font-weight: 600;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .list-lable {
                font-size: 12px;
                color: #333;
            }
        }
        .arrow {
            position: absolute;
            right: 30rpx;
            top: 50%;
            transform: translateY(-50%);
            width: auto;
            height: 40rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            .list-tips{
                margin-right: 10rpx;
                color: #999;
                font-size: 12px;
            }
            img {
                width: 12rpx;
                height: 22rpx;
            }
        }
    }
}
</style>

