<script setup lang="ts">

</script>

<template>
<div class="is-flex justify-content-space-between align-items-center header">
  <slot name="left">
    <van-icon class="back-icon" name="arrow-left" @click.stop="$router.go(-1)" />
  </slot>
  <slot name="center">
  </slot>
  <slot name="right">
    <span class="right-text">Home</span>
  </slot>
</div>
</template>

<style scoped lang="scss">
.header {
  height: 30px;
  padding: 0 24px;
  box-sizing: border-box;

  .back-icon {
    font-size: 16px;
    cursor: pointer;
  }

  .right-text {
    font-size: 16px;
  }
}
</style>
