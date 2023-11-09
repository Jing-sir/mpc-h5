<script setup lang="ts">

</script>

<template>
  <div class="topics-wrap">
    <van-space>
      <span class="title">专题</span>
      <van-tag type="primary">推荐</van-tag>
    </van-space>
    <div class="is-flex justify-content-space-between align-items-center flex-wrap-wrap layout">
      <div class="is-flex flex-direction-column align-items-center layout-item">
        <img class="item-img" src="../../assets/images/item-img.jpeg"  alt=""/>
        <div class="text">每周周刊</div>
      </div>
      <div class="is-flex flex-direction-column align-items-center layout-item">
        <img class="item-img" src="../../assets/images/item-img.jpeg"  alt=""/>
        <div class="text">每周周刊</div>
      </div>
      <div class="is-flex flex-direction-column align-items-center layout-item">
        <img class="item-img" src="../../assets/images/item-img.jpeg"  alt=""/>
        <div class="text">每周周刊</div>
      </div>
      <div class="is-flex flex-direction-column align-items-center layout-item">
        <img class="item-img" src="../../assets/images/item-img.jpeg"  alt=""/>
        <div class="text">每周周刊</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topics-wrap {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #B3B3B3;

  .title {
    color: var(--van-primary-color);
    font-size: 14px;
  }

  .layout {

    .layout-item {
      width: 46%;
      margin-top: 16px;
    }

    .item-img {
      width: 100%;
    }

    .text {
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
