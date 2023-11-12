<script setup lang="ts">

</script>

<template>
  <div class="details-wrap">
    <van-text-ellipsis class="title" rows="2" content="UniswapワレットはAndroidユーザー向けに間もなくリリースされ、ベータ版が公開" />
    <div class="is-flex justify-content-space-between align-items-center layout">
      <span class="time-text">10-26 14:44</span>
      <span>作者</span>
      <div class="is-flex flex-direction-row align-items-center eye-wrap">
        <van-icon class="eye-icon" name="eye-o" />
        <span>2万2千人が見</span>
      </div>
    </div>
    <img class="info-img" src="../../assets/images/news-img.png" alt=""/>
    <div class="info-text">クロスリンク・メッセージング・プロトコルであるLayerZeroは、クロスリンクNFTの交換を容易にするために「Gas Station」というツールを公開しました。これらの機能はエセリウムやポリゴンにも適用されますが、まもなく多くのチェーンに適用されるでしょう。Gas StationはMagic EdenとLayerZeroの共同プロジェクトで、ユーザーはNFTをMagic Edenのアプリやプラットフォームから直接購入することができます。</div>
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
    <div class="info-desc">レビュー133</div>
  </div>
</template>

<style scoped lang="scss">
.details-wrap {
  padding: 0 12px;
  box-sizing: border-box;
  margin-top: 8px;

  .title {
    font-size: 16px;
    margin-bottom: 14px;
  }

  .layout {
    color: #333333;
    font-size: 12px;
  }

  .eye-wrap {
    color: var(--van-primary-color);

    .eye-icon {
      font-size: 16px;
    }

    span {
      margin-left: 4px;
    }
  }

  .info-img {
    width: 100%;
    height: 130px;
    margin-top: 10px;
  }

  .info-text {
    color: #666666;
    margin-top: 8px;
    font-size: 12px;
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

  .info-desc {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 26px;
    color: var(--van-primary-color);
  }
}
</style>
