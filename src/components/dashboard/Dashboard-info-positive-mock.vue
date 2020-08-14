<template>
  <div class="dashboard-info-positive">
    <va-card class="mb-4" :color="info.color">
      <p class="display-2 mb-0" style="color: white;">{{ info.value }}</p>
      <p>{{$t('dashboard.info.' + info.text)}}</p>
    </va-card>
  </div>
</template>

<script>
export default {
  name: 'dashboard-info-positive',
  data () {
    return {
      info: {
        color: 'danger',
        value: '6.9',
        text: 'positive',
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
