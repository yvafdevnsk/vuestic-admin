<template>
  <div class="dashboard-chart-new">
    <va-card
      class="chart-widget"
      :title="$t('dashboard.charts.newCount')"
    >
      <va-chart :data="verticalBarChartData" type="vertical-bar"/>
    </va-card>
  </div>
</template>

<script>
import VaChart from '../statistics/charts/va-charts/VaChart'

export default {
  name: 'dashboard-chart-new',
  components: { VaChart },
  data () {
    return {
    }
  },
  computed: {
    verticalBarChartData: {
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
                label: '新規陽性者数',
                backgroundColor: this.$themes.primary,
                borderColor: 'transparent',
                data: [
                  309,
                  263,
                  360,
                  462,
                  429,
                  331,
                  197,
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
                label: '新規陽性者数',
                backgroundColor: this.$themes.primary,
                borderColor: 'transparent',
                data: [
                  266,
                  250,
                  367,
                  463,
                  472,
                  292,
                  258,
                  309,
                  263,
                  360,
                  462,
                  429,
                  331,
                  197,
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
