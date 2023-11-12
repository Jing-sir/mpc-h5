<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { debounceFunc } from '@/utils/common';
import { useRouter } from 'vue-router';
import { ConfigProvider } from 'vant';

const scrollTop = ref(0);
const activeKey = ref('/');
const showRight = ref(false);

const router = useRouter();

const routerList = [
    { title: 'トップページ', path: '/', name: 'home' },
    { title: '速報', path: '/news', name: 'news' },
    { title: 'ビジネス', path: '/trade', name: 'trade' },
    { title: '特集', path: '/topics', name: 'topics' },
    { title: '学习', path: '/study', name: 'study' },
    { title: '活动', path: '/activity', name: 'activity' },
];

const onMenu = (): void => {
    showRight.value = true;
};

const onTab = (e: { name: string }): void => {
    router.push(e.name);
};

const onRoute = (val: string): void => {
    router.push(val);
};

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

<template>
  <div class="main">
    <ConfigProvider>
      <header :class="['is-flex justify-content-space-between align-items-center home-header', scrollTop > 10 && 'active']">
        <div>logo</div>
        <div class="is-flex flex-direction-row align-items-center header-right">
          <div class="tab-wrap">
            <van-tabs v-model:active="activeKey" @click-tab="onTab">
              <van-tab v-for="(item, i) of routerList" :key="i" :title="item.title" :name="item.path" />
            </van-tabs>
          </div>
          <van-icon class="search-icon" name="search" />
          <van-icon class="menu-icon" name="wap-nav" @click.stop="onMenu" />
        </div>
      </header>
      <div class="router-wrap">
        <router-view />
      </div>
    </ConfigProvider>
    <van-popup
        v-model:show="showRight"
        position="right"
        :style="{ width: '40%', height: '100%', background: '#000' }"
    >
      <div class="popup-wrap">
        <div
            v-for="(item, i) of routerList" :key="i" :title="item.title"
            :class="['route-item', $route.name === item.name && 'active']"
            @click.stop="onRoute(item.path)"
        >
          {{ item.title }}
        </div>
      </div>
    </van-popup>
  </div>
</template>

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

.popup-wrap {
  padding: 20px 12px;
  box-sizing: border-box;

  .route-item {
    padding: 10px 0;
    font-size: 14px;
    margin-left: 10px;
    color: #FFFFFF;

    &.active {
      color: var(--van-primary-color);
    }
  }
}

::v-deep(.van-tab) {
  padding: 0;
  width: 50px;
}
</style>
