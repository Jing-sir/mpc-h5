<script setup lang="ts">
import { ref } from 'vue';

const showPopover = ref(false);

// 通过 actions 属性来定义菜单选项
const actions = [
    { text: 'USD' },
    { text: 'JAY' },
];
</script>

<template>
  <div class="trade-details-wrap">
    <div class="title">暗号資産の一覧</div>
    <van-space :size="8">
      <van-button size="small">All</van-button>
      <van-button size="small">coindesk20</van-button>
      <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
        <template #reference>
          <van-button size="small">JAY</van-button>
        </template>
      </van-popover>
    </van-space>
    <table class="v-table">
      <thead class="v-table-head">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody class="margin-top-8">
        <tr class="tbody-tr">
          <td>1</td>
          <td>John Doe</td>
          <td>20</td>
        </tr>
        <tr class="tbody-tr">
          <td>2</td>
          <td>Jane Smith</td>
          <td>22</td>
        </tr>
        <tr class="tbody-tr">
          <td>2</td>
          <td>Jane Smith</td>
          <td>22</td>
        </tr>
        <tr class="tbody-tr">
          <td>2</td>
          <td>Jane Smith</td>
          <td>22</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.trade-details-wrap {
  min-height: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  .title {
    font-size: 16px;
    margin-top: 12px;
    margin-bottom: 8px;
  }

  .v-table {
    width: 100%;
    height: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .v-table-head {
    margin-bottom: 8px;

    tr th {
      padding: 6px 8px;
      border-left: 1px solid #111111;
      border-bottom: 1px solid #111111;

      &:first-child {
        border-left: 0;
      }
    }
  }

  .tbody-tr {
    border: 1px solid #111111;

    td {
      font-size: 14px;
      padding: 10px 6px;
      border-top: 1px solid #111111;
      border-left: 1px solid #111111;
      border-bottom: 1px solid #111111;

      &:last-child {
        border-right: 1px solid #111111;
      }
    }
  }
}

::v-deep(.van-button) {
  min-width: 46px;
  border-radius: 16px;
}
</style>
