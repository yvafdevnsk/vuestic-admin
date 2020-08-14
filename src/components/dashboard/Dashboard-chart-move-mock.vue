<template>
  <div class="dashboard-chart-move">
    <va-card
      class="chart-widget"
      :title="$t('dashboard.charts.moveCount')"
    >
      <va-chart :data="lineChartData" type="line"/>
    </va-card>
  </div>
</template>

<script>
import VaChart from '../statistics/charts/va-charts/VaChart'

export default {
  name: 'dashboard-chart-move',
  components: { VaChart },
  data () {
    return {
    }
  },
  computed: {
    lineChartData: {
      get () {
        if (this.$store.state.summaryTerm === 'short') {
          return {
            labels: [
              '20200804',
              '20200805',
              '20200806',
              '20200807',
              '20200808',
              '20200809',
              '20200810',
            ],
            datasets: [
              {
                label: '7日間移動平均',
                backgroundColor: this.$themes.secondary,
                borderColor: 'transparent',
                data: [
                  344.4,
                  346.3,
                  345.3,
                  345.1,
                  339.0,
                  344.6,
                  335.9,
                ],
              },
            ],
          }
        } else {
          return {
            labels: [
              '0728',
              '0729',
              '0730',
              '0731',
              '0801',
              '0802',
              '0803',
              '0804',
              '0805',
              '0806',
              '0807',
              '0808',
              '0809',
              '0810',
            ],
            datasets: [
              {
                label: '7日間移動平均',
                backgroundColor: this.$themes.secondary,
                borderColor: 'transparent',
                data: [
                  256.4,
                  258.1,
                  258.3,
                  287.3,
                  312.6,
                  320.1,
                  338.3,
                  344.4,
                  346.3,
                  345.3,
                  345.1,
                  339.0,
                  344.6,
                  335.9,
                ],
              },
            ],
          }
        }
      },
    },
  },
}
</script>

<style lang="scss">
.chart-widget {
  .va-card__body {
    height: 500px;
  }
}
</style>
