<template>
    <div class="button-wrap" :style="padding">
        <div class="button-content" :class="type ? type : 'default'" @click="handleClick">
            {{text || 'BUTTON'}}
        </div>
    </div>
</template>

<script>
export default {
  props: ["type", "text", "full", "padding"],
  data() {
      return {
          
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
.button-wrap {
    height: 44px;
    width: 100%;
    box-sizing: border-box;
    .button-content {
        height: 44px;
        width: 100%;
        color: #ffffff;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        &:active {
            background-color: #ccc;
        }
        &.default {
            background-color: #5293fa;
        }
        &.warning {
            background-color: #f55d54;
        }
    }
}
</style>

