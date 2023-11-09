<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
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
  <div class="trade-wrap">
    <van-space class="header">
      <span class="title">商业</span>
      <van-tag type="primary">信息</van-tag>
    </van-space>
    <div class="list-wrap">
      <div ref="scrollWrap" class="scroll-wrap">
        <div>
          <div v-for="(item, i) of 10" :key="i" class="is-flex justify-content-space-between align-items-center list-item">
            <div class="is-flex flex-direction-column">
              <van-text-ellipsis class="text-wrap" rows="2" :content="'金色观察 | OpenSea裁员惨失金主信任 NFT市场龙头掉入西西弗斯困境金色观察 | OpenSea裁员惨失金主信任 NFT市场龙头掉入西西弗斯困境'" />
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
    <div class="is-flex justify-content-center">
      <span class="more-btn">点击加载更多</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trade-wrap {
  margin-top: 10px;

  .header {
    padding: 0 10px;
  }

  .list-wrap {
    padding: 0 10px 30px 10px;
    margin-top: 10px;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  .scroll-wrap {
    height: 30vh;
  }

  .list-item {
    margin-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #B3B3B3;

    .item-img {
      width: 108px;
      height: 60px;
    }
  }

  .text-wrap {
    width: 60vw;
    font-size: 14px;
  }

  .time-text {
    color: #666666;
    margin-top: 6px;
    font-size: 12px;
  }

  .more-btn {
    margin: 16px 0;
    font-size: 12px;
    color: var(--van-primary-color);
  }
}

.title {
  color: var(--van-primary-color);
  font-size: 14px;
}
</style>
