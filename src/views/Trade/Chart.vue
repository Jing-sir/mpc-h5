<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const activeKey = ref('1h');
const showPopover = ref(false);

const option = ref({
    title: {
        text: 'Stacked Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
});

// 通过 actions 属性来定义菜单选项
const actions = [
    { text: 'USD' },
    { text: 'JAY' },
];

const initChart = (): void => {
    let myChart = echarts.init(document.getElementById('coinWrap')),
        option;
    option = {
        title: { text: '', show: false },
        tooltip: { trigger: 'axis' },
        legend: {
            show: false,
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            top: '2%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            show: false,
            feature: { saveAsImage: {} }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [{
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
        }]
    };
    option && myChart.setOption(option);
};

onMounted(() => {
    initChart();
});
</script>

<template>
  <div class="chart-wrap">
    <div class="is-flex justify-content-space-between align-items-center">
      <van-popover v-model:show="showPopover" :actions="actions">
        <template #reference>
          <van-button size="small">
            JAY
            <i class="iconfont icon-sanjiaoxing down-icon"></i>
          </van-button>
        </template>
      </van-popover>
      <van-popover v-model:show="showPopover" :actions="actions">
        <template #reference>
          <van-button size="small">
            JAY
            <i class="iconfont icon-sanjiaoxing right-icon"></i>
          </van-button>
        </template>
      </van-popover>
    </div>
    <div class="is-flex justify-content-space-between align-items-center time-wrap">
      <span class="money-text">4,278,368</span>
      <div class="is-flex flex-direction-column align-items-center">
        <span>24時間変動率</span>
        <div class="rate-text">1.13%</div>
      </div>
    </div>
    <div class="is-flex flex-direction-row align-items-center date-wrap">
      <i class="iconfont icon-shijian time-icon"></i>
      <span>2023/10/25</span>
      <span class="to-text">To</span>
      <span>2023/10/26</span>
    </div>
    <div class="is-flex flex-direction-row align-items-center hour-wrap">
      <span :class="['hour-desc', activeKey === '1h' && 'active']">1H</span>
      <span :class="['hour-desc', activeKey === '6h' && 'active']">6H</span>
      <span :class="['hour-desc', activeKey === '12h' && 'active']">12H</span>
      <span :class="['hour-desc', activeKey === '1d' && 'active']">1D</span>
      <span :class="['hour-desc', activeKey === '1w' && 'active']">1W</span>
      <span :class="['hour-desc', activeKey === '1m' && 'active']">1M</span>
      <span :class="['hour-desc', activeKey === '3m' && 'active']">1M</span>
      <span :class="['hour-desc', activeKey === 'all' && 'active']">All</span>
    </div>
    <div id="coinWrap" class="chart-container"></div>
  </div>
</template>

<style scoped lang="scss">
.chart-wrap {
  padding: 10px 12px;
  box-sizing: border-box;

  .down-icon {
    font-size: 14px;
    padding-left: 6px;
    margin-left: 4px;
    border-left: 1px solid #111111;
  }

  .right-icon {
    margin-left: 4px;
  }

  .time-wrap {
    margin-top: 14px;
  }

  .money-text {
    color: #0AF04A;
    font-size: 16px;
  }

  .rate-text {
    color: #0AF04A;
    font-size: 16px;
    margin-top: 4px;
    text-align: center;
  }

  .to-text {
    margin: 0 10px;
  }

  .time-icon {
    margin-right: 4px;
  }

  .date-wrap {
    font-size: 12px;
  }

  .hour-wrap {
    margin-top: 4px;
    font-size: 12px;

    .hour-desc {
      padding: 4px 10px;
      box-sizing: border-box;

       &.active {
         color: #FFFFFF;
         border-radius: 10px;
         background: var(--van-primary-color);
       }
    }
  }

  .chart-container {
    height: 260px;
    margin-top: 20px;
  }
}

::v-deep(.van-button) {
  min-width: 46px;
  border-radius: 16px;
}
</style>
