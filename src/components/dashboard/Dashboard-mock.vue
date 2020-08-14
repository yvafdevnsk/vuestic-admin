<template>
  <div class="dashboard">
    <div class="row">
      <div class="flex xs6">
        <dashboard-chart-new-mock />
      </div>
      <div class="flex xs6">
        <dashboard-chart-move-mock />
      </div>
    </div>
    <div class="row">
      <div class="flex xs3">
        <dashboard-info-new-mock />
      </div>
      <div class="flex xs3">
        <dashboard-info-test-mock />
      </div>
      <div class="flex xs3">
        <dashboard-info-positive-mock />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardChartNewMock from './Dashboard-chart-new-mock'
import DashboardChartMoveMock from './Dashboard-chart-move-mock'
import DashboardInfoNewMock from './Dashboard-info-new-mock'
import DashboardInfoTestMock from './Dashboard-info-test-mock'
import DashboardInfoPositiveMock from './Dashboard-info-positive-mock'

export default {
  name: 'dashboard',
  components: {
    DashboardChartNewMock,
    DashboardChartMoveMock,
    DashboardInfoNewMock,
    DashboardInfoTestMock,
    DashboardInfoPositiveMock,
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
