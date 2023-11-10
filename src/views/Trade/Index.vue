<script setup lang="ts">
import { ref, onMounted, onUnmounted} from 'vue';
import BScroll from 'better-scroll';

const bsInstall = ref();
const scrollWrap = ref();
const isPlay = ref(true);

const onNoticePlay = (): void => {
    isPlay.value = !isPlay.value;
};

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
    <div class="is-flex justify-content-space-between align-items-center trade-layout">
      <div class="left-notice">
        <van-notice-bar color="#1989fa" background="#ffffff" :scrollable="isPlay">
          米袋虽空——樱花开哉！
        </van-notice-bar>
      </div>
      <div class="right-icon" @click.stop="onNoticePlay">
        <van-icon name="more-o" color="#3F7CF6" />
      </div>
    </div>
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
.trade-wrap {
  padding: 0 12px;
  height: 100%;
  box-sizing: border-box;

  .trade-layout {
    height: 30px;
  }

  .left-notice {
    width: 90%;
  }

  .right-icon {
    font-size: 24px;
    padding-right: 6px;
    box-sizing: border-box;
  }

  .list-wrap {
    overflow: hidden;
    box-sizing: border-box;
  }

  .scroll-wrap {
    height: 82vh;
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

::v-deep(.van-notice-bar) {
  padding-right: 6px;
}
</style>
