<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const onSubmit = (): void => {

};
</script>

<template>
  <div class="activity-wrap">
    <div class="banner-main">
      <img class="banner-img" src="../../assets/images/news-img.png" alt=""/>
      <van-text-ellipsis class="text-wrap" content="2023年にドバイでカルダーノ・サミットが開催" />
    </div>
    <div class="form-wrap">
      <div class="is-flex flex-direction-row align-items-center layout">
        <van-icon class="layout-icon" name="newspaper-o" />
        <div class="layout-right">
          <div class="layout-content">2023-10-5 00:00:00-2023-10-16 18:00:00</div>
        </div>
      </div>
      <div class="is-flex flex-direction-row align-items-center layout">
        <van-icon class="layout-icon" name="newspaper-o" />
        <div class="layout-right">
          <div class="layout-content">2023-10-5 00:00:00-2023-10-16 18:00:00</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="footer-title">イベントの説明</span>
      <van-text-ellipsis class="desc" rows="4" content="カルダーノ・サミットは3年連続で開催され、[メディア機関]は、2023年のサミットのメディア・パートナーとして、このイベントの中心になることを喜んで発表しました。" />
      <van-text-ellipsis class="desc" rows="5" content="カルダーノ・サミットは3年連続で開催され、[メディア機関]は、2023年のサミットのメディア・パートナーとして、このイベントの中心になることを喜んで発表しました。" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.activity-wrap {
  background: #F6F7F8;
  height: 90vh;

  .banner-main {
    margin-top: 8px;
    background: #FFFFFF;
  }

  .banner-img {
    width: 100%;
    height: 140px;
  }

  .text-wrap {
    padding: 8px 12px;
    font-size: 16px;
    box-sizing: border-box;
  }

  .form-wrap {
    padding: 0 16px 12px 16px;
    margin-top: 12px;
    background: #FFFFFF;
    box-sizing: border-box;

    .layout-icon {
      color: var(--van-primary-color);
      font-size: 20px;
    }

    .layout-right {
      width: 100%;
      margin-left: 12px;
      font-size: 12px;
      border-bottom: 1px solid rgba(179, 179, 179, .8);
    }

    .layout-content {
      margin: 12px 0;
    }
  }

  .footer {
    height: 44vh;
    margin-top: 12px;
    padding: 14px 12px;
    background: #FFFFFF;
    box-sizing: border-box;

    .footer-title {
      font-size: 16px;
      padding-bottom: 2px;
      border-bottom: 2px solid var(--van-primary-color);
      color: var(--van-primary-color);
    }

    .desc {
      margin-top: 12px;
      font-size: 12px;
      color: #666666;
    }
  }
}
</style>
