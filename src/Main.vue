<template>
  <div class="main">
    <ConfigProvider>
      <header :class="['is-flex justify-content-space-between align-items-center home-header', scrollTop > 10 && 'active']">
        <div>logo</div>
        <div class="is-flex flex-direction-row align-items-center header-right">
          <div class="tab-wrap">
            <van-tabs v-model:active="activeKey">
              <van-tab title="トップページ" />
              <!--   首页   -->
              <van-tab title="速報" />
              <!--   快讯   -->
              <van-tab title="ビジネス" />
              <!--   商业   -->
              <van-tab title="特集" />
              <!--   专题   -->
              <van-tab title="学习" />
              <!--   学习   -->
              <van-tab title="活动" />
              <!--   活动   -->
            </van-tabs>
          </div>
          <van-icon class="search-icon" name="search" />
          <van-icon class="menu-icon" name="wap-nav" />
        </div>
      </header>
      <div class="router-wrap">
        <router-view />
      </div>
    </ConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { debounceFunc } from '@/utils/common';
import { ConfigProvider } from 'vant';

const scrollTop = ref(0);
const activeKey = ref('');

const onScroll = debounceFunc((): void => {
    scrollTop.value = window.scrollY || document.documentElement.scrollTop;
}, 10);

onMounted(() => {
    window.addEventListener('scroll', onScroll, true);
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll, true);
});
</script>

<style lang="scss" scoped>
.icon {
  width: 1em ;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.home-header {
  height: 60px;
  padding: 0 12px;
  background: #FFFFFF;
  position: relative;
  z-index: 9;
  box-sizing: border-box;

  &.active {
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    position: sticky;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 3px 1px;
  }

  .header-right {
  }

  .tab-wrap {
    width: 70vw;
  }

  .search-icon, .menu-icon {
    margin-left: 4px;
  }

  .search-icon {
    font-size: 20px;
  }
}

::v-deep(.van-tab) {
  padding: 0;
  width: 50px;
}
</style>
