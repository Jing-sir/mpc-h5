<template>
  <div class="main">
    <ConfigProvider>
      <header class="is-flex justify-content-space-between align-items-center home-header">
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
      <router-view />
    </ConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ConfigProvider } from 'vant';

const activeKey = ref('');

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
  box-sizing: border-box;

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
