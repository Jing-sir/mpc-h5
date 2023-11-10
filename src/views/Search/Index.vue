<script setup lang="ts">
import { ref } from 'vue';

const searchVal = ref('');

const onRightIcon = (): void => {
    console.log(1111);
};
</script>

<template>
  <div>
    <van-search
      v-model="searchVal"
      shape="round"
      placeholder="内容の入力をお願"
      @click-right-icon="onRightIcon">
        <template #label></template>
        <template #left>
          <van-icon class="back-icon" name="arrow-left" color="#111111" @click.stop="$router.go(-1)" />
        </template>
        <template #right-icon>
          <span class="search-text">検索</span>
        </template>
    </van-search>
    <div class="search-wrap">
      <van-space>
        <van-tag type="primary">人気</van-tag>
        <span class="tag-title">文章</span>
      </van-space>
      <div class="is-flex flex-direction-row align-items-center list-item">
        <span class="num-block">1</span>
        <van-text-ellipsis class="text-wrap" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
      </div>
      <div class="is-flex flex-direction-row align-items-center list-item">
        <span class="num-block">1</span>
        <van-text-ellipsis class="text-wrap" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
      </div>
      <div class="is-flex flex-direction-row align-items-center list-item">
        <span class="num-block">1</span>
        <van-text-ellipsis class="text-wrap" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.back-icon {
  font-size: 16px;
  margin-right: 8px;
}

.search-text {
  color: #459BF8;
  font-size: 12px;
  margin-right: 16px;
}

.search-wrap {
  margin-top: 30px;
  padding: 0 16px;
  box-sizing: border-box;

  .num-block {
    min-width: 16px;
    border-radius: 6px 0 6px 0;
    color: #FFFFFF;
    text-align: center;
    margin-right: 6px;
    font-size: 12px;
    background: #3e8ed0;
    box-sizing: border-box;
  }

  .list-item {
    margin-top: 18px;
  }

  .text-wrap {
    width: 90%;
    font-size: 12px;
  }
}

::v-deep(.van-search__content) {
  background: #FFFFFF;
  border: 1px solid #111111;
}

::v-deep(.van-field__control) {
  &::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, .5);
  }
}
</style>
