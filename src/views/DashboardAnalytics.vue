<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
            <!-- OVERLAY CARD 2 -->
            <div class="vx-col w-full lg:w-1/4 sm:w-1/2 mb-base">
                <vx-card class="overlay-card overflow-hidden">
                    <template slot="no-body">
                        <img :src="require('@/assets/images/pages/card-image-5.jpg')" alt="user-profile-cover" class="responsive blur-1">
                        <div class="card-overlay text-white">
                            <div class="flex flex-col justify-between h-full">
                                <div class="text-center mt-8 w-full">
                                    <h3 class="text-white mb-2 tracking-wide">小雪</h3>
                                    <p class="mb-6">北京</p>
                                    <div class="flex justify-around">
                                        <feather-icon icon="CloudSnowIcon" svgClasses="w-24 h-24 text-white"></feather-icon>
                                        <h2 class="text-white text-big">-6 <sup class="text-2xl">o</sup> </h2>
                                    </div>
                                </div>
                                <div class="text-center w-full">
                                    <div class="flex justify-between px-8 mb-8 text-xl">
                                        <span>Precipitation</span>
                                        <span>48%</span>
                                    </div>
                                    <div class="flex justify-between px-8 mb-8 text-xl">
                                        <span>Humidity</span>
                                        <span>60%</span>
                                    </div>
                                    <div class="flex justify-between px-8 mb-8 text-xl">
                                        <span>Wind</span>
                                        <span>23 km/h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </vx-card>
            </div>
            <!-- ------------------------------------------ -->
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2  mb-base">
                <vx-card title="项目下线率">
                    <div v-for="(browser, index) in analyticsData.browserAnalytics" :key="browser.id" :class="{'mt-4': index}">
                        <div class="flex justify-between">
                            <div class="flex flex-col">
                                <span class="mb-1">{{ browser.name }}</span>
                                <h4>{{ browser.ratio }}%</h4>
                            </div>
                            <div class="flex flex-col text-right">
                                <span class="flex -mr-1">
                                    <span class="mr-1">{{ browser.comparedResult }}</span>
                                    <feather-icon :icon=" browser.comparedResult < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'" :svgClasses="[browser.comparedResult < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                                </span>
                                <span class="text-grey">{{ browser.time | time(true) }}</span>
                            </div>
                        </div>
                        <vs-progress :percent="browser.ratio"></vs-progress>
                    </div>
                </vx-card>
            </div>
          <!-- ---------------------------------------- -->
    </div>

    <div class="vx-row">
      <!-- CARD 4: SESSION -->
      <div class="vx-col w-full md:w-1/3 mb-base">
            <!-- RADIAL CHART -->
                <vx-card title="广电项目完成度">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">In Progress</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
      </div>
      <!-- CARD 5: SESSION -->
      <div class="vx-col w-full md:w-1/3 mb-base">
            <!-- RADIAL CHART -->
                <vx-card title="树木图文项目完成度">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">In Progress</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
      </div>

      <!-- CARD 4: SESSION -->
      <div class="vx-col w-full md:w-1/3 mb-base">
            <!-- RADIAL CHART -->
                <vx-card title="树木视频项目完成度">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">In Progress</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
      </div>
    </div>
    <div class="vx-col w-full">
        <echarts-line-chart></echarts-line-chart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import EchartsLineChart from './charts-and-maps/charts/echarts/EchartsLineChart.vue'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default {
    data() {
        return {
            analyticsData: analyticsData,
            isImp: false,
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            show: false,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            'tableList': [
                'vs-th: Component',
                'vs-tr: Component',
                'vs-td: Component',
                'thread: Slot',
                'tbody: Slot',
                'header: Slot'
            ],
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        ChangeTimeDurationDropdown,
        EchartsLineChart
    },
}
</script>

<style lang="scss">
#dashboard-analytics {
  .greet-user{
    position: relative;
    .decore-left{
      position: absolute;
      left:0;
      top: 0;
    }
    .decore-right{
      position: absolute;
      right:0;
      top: 0;
    }
  }

  @media(max-width: 576px) {
    .decore-left, .decore-right{
      width: 140px;
    }
  }
}
</style>
