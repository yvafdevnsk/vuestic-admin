<template>
  <div class="dashboard-info-new">
    <va-card class="mb-4" :color="info.color">
      <p class="display-2 mb-0" style="color: white;">{{ info.value }}</p>
      <p>{{$t('dashboard.info.' + info.text)}}</p>
    </va-card>
  </div>
</template>

<script>
export default {
  name: 'dashboard-info-new',
  data () {
    return {
      info: {
        color: 'success',
        value: '197',
        text: 'newCount',
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
