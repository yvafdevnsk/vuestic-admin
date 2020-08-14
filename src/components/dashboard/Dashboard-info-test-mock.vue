<template>
  <div class="dashboard-info-test">
    <va-card class="mb-4" :color="info.color">
      <p class="display-2 mb-0" style="color: white;">{{ info.value }}</p>
      <p>{{$t('dashboard.info.' + info.text)}}</p>
    </va-card>
  </div>
</template>

<script>
export default {
  name: 'dashboard-info-test',
  data () {
    return {
      info: {
        color: 'info',
        value: '1407',
        text: 'test',
        icon: '',
      },
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
