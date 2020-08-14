<template>
  <div class="report">
    <div class="row">
      <div class="flex xs6">
        <report-data-table-new />
      </div>
      <div class="flex xs6">
        <report-data-table-move />
      </div>
    </div>
  </div>
</template>

<script>
import ReportDataTableNew from './Report-datatable-new-mock'
import ReportDataTableMove from './Report-datatable-move-mock'

export default {
  name: 'report',
  components: {
    ReportDataTableNew,
    ReportDataTableMove,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
</style>
