<script setup lang="ts">
import { ref } from 'vue';

const isPlay = ref(true);

const onNoticePlay = (): void => {
    isPlay.value = !isPlay.value;
};
</script>

<template>
  <div class="is-flex justify-content-space-between align-items-center notice-wrap">
    <div class="left-notice">
      <van-notice-bar color="#1989fa" background="#ecf9ff" :scrollable="isPlay">
        米袋虽空——樱花开哉！
      </van-notice-bar>
    </div>
    <div class="right-icon" @click.stop="onNoticePlay">
      <van-icon name="play-circle" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.notice-wrap {
  margin-top: 8px;
  border-top: 1px solid #B3B3B3;
  border-bottom: 1px solid #B3B3B3;

  .left-notice {
    width: 90%;
    border-right: 1px solid #B3B3B3;
  }

  .right-icon {
    font-size: 24px;
    padding-right: 6px;
    box-sizing: border-box;
  }
}
</style>
