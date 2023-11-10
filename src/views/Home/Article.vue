<script setup lang="ts">

</script>

<template>
  <div class="article-wrap">
    <div class="is-flex justify-content-space-between align-items-center">
      <van-space>
        <van-tag type="primary">推荐</van-tag>
        <span class="title">文章</span>
      </van-space>
      <van-space :size="2" class="right-icon">
        <span>更多</span>
        <van-icon name="arrow" />
      </van-space>
    </div>
    <div class="list-wrap">
      <div class="is-flex flex-direction-row align-items-center list-item">
        <span class="num-block">1</span>
        <van-text-ellipsis class="text-wrap" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
      </div>
      <div class="is-flex flex-direction-row align-items-center list-item">
        <span class="num-block">2</span>
        <van-text-ellipsis class="text-wrap" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-wrap {
  margin-top: 14px;
  padding: 0 10px 0 12px;
  border-bottom: 1px solid #B3B3B3;

  .title {
    font-size: 14px;
  }

  .right-icon {
    color: var(--van-primary-color);
  }

  .list-wrap {
    margin-top: 16px;
    height: auto;

    .num-block {
      min-width: 20px;
      border-radius: 6px 0 6px 0;
      color: #FFFFFF;
      padding: 3px 0;
      text-align: center;
      margin-right: 6px;
      background: #3e8ed0;
      box-sizing: border-box;
    }

    .list-item {
      margin-bottom: 16px;
    }

    .text-wrap {
      width: 90%;
    }
  }
}
</style>
