<script>
export default {
  created () {
    
  }
}
</script>

<style lang="less">
@import './styles/iconfont.css';
body {
  background-color: #fff;
  font-family: PingFangSC;
}
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
div {
  display: flex;
  display: -webkit-flex;
  word-break:break-all;
}

.container {
  width: 100%;
  padding-top: 150rpx;
}

.border-bottom {
  border-bottom: 0.5px solid #ebebeb;
}
.border-top {
  border-top: 0.5px solid #ebebeb;
}
.page-wrap {
  width: 100%;
  padding-top: 64px;
  flex-direction: column;
  position: relative;
}



.arrow {
    position: absolute;
    right: 30rpx;
    top: 50%;
    transform: translateY(-50%);
    width: 12rpx;
    height: 22rpx;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
