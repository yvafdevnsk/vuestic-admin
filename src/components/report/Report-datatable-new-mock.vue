<template>
  <va-card
    class="table-widget"
    :title="$t('tables.labelsNew')"
  >
    <va-data-table
      :fields="fields"
      :data="newCount"
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
        title: this.$t('tables.headings.newCount'),
      }]
    },
    newCount: {
      get () {
        if (this.$store.state.summaryTerm === 'short') {
          return [
            {
              date: '20200810',
              count: 197,
            },
            {
              date: '20200809',
              count: 331,
            },
            {
              date: '20200808',
              count: 429,
            },
            {
              date: '20200807',
              count: 462,
            },
            {
              date: '20200806',
              count: 360,
            },
            {
              date: '20200805',
              count: 263,
            },
            {
              date: '20200804',
              count: 309,
            },
          ]
        } else {
          return [
            {
              date: '20200810',
              count: 197,
            },
            {
              date: '20200809',
              count: 331,
            },
            {
              date: '20200808',
              count: 429,
            },
            {
              date: '20200807',
              count: 462,
            },
            {
              date: '20200806',
              count: 360,
            },
            {
              date: '20200805',
              count: 263,
            },
            {
              date: '20200804',
              count: 309,
            },
            {
              date: '20200803',
              count: 258,
            },
            {
              date: '20200802',
              count: 292,
            },
            {
              date: '20200801',
              count: 472,
            },
            {
              date: '20200731',
              count: 463,
            },
            {
              date: '20200730',
              count: 367,
            },
            {
              date: '20200729',
              count: 250,
            },
            {
              date: '20200728',
              count: 266,
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
