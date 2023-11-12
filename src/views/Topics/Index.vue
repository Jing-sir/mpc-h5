<script setup lang="ts">

</script>

<template>
  <div class="topics-wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="topics-main">
      <div class="title">ホットな話題</div>
      <div class="is-flex flex-direction-row align-items-center">
        <img class="news-img" src="../../assets/images/news-img.png"  alt=""/>
        <div class="main-right">
          <van-text-ellipsis rows="2" class="right-title" content="RWAは次の兆ドル級の市場になるでしょうか?" />
          <van-text-ellipsis rows="3" class="right-desc" content="RWAは次の兆ドル級の市場になるでしょうか?RWAは次の兆ドル級の市場になるでしょうか?RWAは次の兆ドル級の市場になるでしょうか?" />
          <span class="right-bottom-text">2023年10月27日</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topics-wrap {
  .my-swipe .van-swipe-item {
    color: #fff;
    height: 156px;
    font-size: 20px;
    line-height: 156px;
    text-align: center;
    background-color: #39a9ed;
  }

  .topics-main {
    padding: 0 12px;
    margin-top: 14px;
    box-sizing: border-box;
  }

  .title {
    font-size: 16px;
    margin-bottom: 10px;
    color: var(--van-primary-color);
  }

  .news-img {
    width: 100px;
    height: 144px;
    margin-right: 10px;
    border-radius: 6px;
  }

  .main-right {
    width: 100%;
    height: 144px;
    position: relative;

    .right-title {
      font-size: 16px;
    }

    .right-desc {
      color: #666666;
      font-size: 12px;
      margin-top: 10px;
    }

    .right-bottom-text {
      position: absolute;
      bottom: 0;
      color: #666666;
    }
  }
}
</style>
