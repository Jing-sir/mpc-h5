<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BScroll from 'better-scroll';

const bsInstall = ref();
const scrollWrap = ref();
const activeKey = ref('1');

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
  <div class="tab-wrap">
    <van-tabs v-model:active="activeKey">
      <van-tab title="比特币" />
      <van-tab title="DeFi" />
      <van-tab title="NFT" />
      <van-tab title="以太坊" />
      <van-tab title="WEB3" />
      <van-tab title="钱包" />
    </van-tabs>
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
  </div>
</template>

<style scoped lang="scss">
.tab-wrap {
  box-sizing: border-box;

  .list-wrap {
    padding: 0 12px 20px 12px;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  .scroll-wrap {
    height: 75vh;
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

::v-deep(.van-tab) {
  padding: 0;
  width: 50px;
}

::v-deep(.van-tabs__nav--line.van-tabs__nav--complete) {
  padding-left: 0;
  padding-right: 0;
}
</style>
