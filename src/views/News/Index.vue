<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import BScroll from 'better-scroll';

const bsInstall = ref();
const scrollWrap = ref();

const initBsInit = () => {
    bsInstall.value = new BScroll(scrollWrap.value, {
        scrollY: true,
        pullUpLoad: true,
    });
};

onMounted(() => {
    initBsInit();
});

onUnmounted(() => {
    bsInstall.value.destroy();
});
</script>

<template>
  <div class="is-flex flex-direction-column news-wrap">
    <van-text-ellipsis class="news-title" :rows="2" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
    <div class="is-flex justify-content-space-between align-items-center text-wrap">
      <span>10-26  14:44</span>
      <span>Brayden Linfrea</span>
    </div>
    <van-text-ellipsis class="desc-wrap" :rows="3" :content="'慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'" />
    <van-space :size="26" class="link-wrap">
      <van-space :size="6" class="link-text">
        <i class="iconfont icon-dianzan3"></i>
        <span class="link-desc">121</span>
      </van-space>
      <van-space :size="6" class="link-text">
        <i class="iconfont icon-dianzan2"></i>
        <span>121</span>
      </van-space>
      <i class="iconfont icon-fenxiang share-icon"></i>
    </van-space>
    <van-space class="margin-top-18">
      <van-tag type="primary">推薦</van-tag>
      <span class="tag-title">文章</span>
    </van-space>
    <div class="list-wrap">
      <div ref="scrollWrap" class="scroll-wrap">
        <div>
          <div v-for="(item, i) of 10" :key="i" class="is-flex justify-content-space-between align-items-center list-item">
            <div class="is-flex flex-direction-column">
              <van-text-ellipsis class="text-wrap-desc" rows="2" :content="'金色观察 | OpenSea裁员惨失金主信任 NFT市场龙头掉入西西弗斯困境金色观察 | OpenSea裁员惨失金主信任 NFT市场龙头掉入西西弗斯困境'" />
              <div class="is-flex justify-content-space-between align-items-center time-text">
                <span>金色财经</span>
                <span>3小时前</span>
              </div>
            </div>
            <img class="item-img" src="../../assets/images/item-img.jpeg"  alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-wrap {
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  .text-wrap {
    color: rgb(30 29 29 / 80%);
    font-size: 12px;
    margin-top: 6px;
    padding-right: 62px;
    box-sizing: border-box;
  }

  .desc-wrap {
    font-size: 12px;
    margin-top: 10px;
    color: rgb(30 29 29 / 80%);
  }

  .link-wrap {
    margin-top: 10px;
    font-size: 12px;
  }

  .link-text {
    color: #999999;
  }

  .link-desc {
    margin-top: 3px;
  }

  .share-icon {
    color: #1F4EB4;
  }

  .margin-top-18 {
    margin-top: 18px;
  }

  .list-wrap {
    overflow: hidden;
    box-sizing: border-box;
  }

  .scroll-wrap {
    height: 58vh;
  }

  .list-item {
    margin-top: 12px;
    padding-bottom: 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdee0c4;

    .item-img {
      width: 108px;
      height: 60px;
    }
  }

  .text-wrap-desc {
    width: 60vw;
    font-size: 12px;
  }

  .time-text {
    color: #666666;
    margin-top: 6px;
    font-size: 10px;
  }
}
</style>
