<template>
  <va-card
    class="table-widget"
    :title="$t('tables.labelsMove')"
  >
    <va-data-table
      :fields="fields"
      :data="moveCount"
      no-pagination
    >
    </va-data-table>
  </va-card>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    fields () {
      return [{
        name: 'date',
        title: this.$t('tables.headings.date'),
      }, {
        name: 'count',
        title: this.$t('tables.headings.moveCount'),
      }]
    },
    moveCount: {
      get () {
        if (this.$store.state.summaryTerm === 'short') {
          return [
            {
              date: '20200810',
              count: 335.9,
            },
            {
              date: '20200809',
              count: 344.6,
            },
            {
              date: '20200808',
              count: 339.0,
            },
            {
              date: '20200807',
              count: 345.1,
            },
            {
              date: '20200806',
              count: 345.3,
            },
            {
              date: '20200805',
              count: 346.3,
            },
            {
              date: '20200804',
              count: 344.4,
            },
          ]
        } else {
          return [
            {
              date: '20200810',
              count: 335.9,
            },
            {
              date: '20200809',
              count: 344.6,
            },
            {
              date: '20200808',
              count: 339.0,
            },
            {
              date: '20200807',
              count: 345.1,
            },
            {
              date: '20200806',
              count: 345.3,
            },
            {
              date: '20200805',
              count: 346.3,
            },
            {
              date: '20200804',
              count: 344.4,
            },
            {
              date: '20200803',
              count: 338.3,
            },
            {
              date: '20200802',
              count: 320.1,
            },
            {
              date: '20200801',
              count: 312.6,
            },
            {
              date: '20200731',
              count: 287.3,
            },
            {
              date: '20200730',
              count: 258.3,
            },
            {
              date: '20200729',
              count: 258.1,
            },
            {
              date: '20200728',
              count: 256.4,
            },
          ]
        }
      },
    },
  },
  methods: {
  },
}
</script>

<style lang="scss">
.table-widget {
  .va-card__body {
    height: 500px;
  }
}
</style>
