<template>
  <va-list fit>
    <va-list-label>
      {{ $t('userProfile.menuTitle') }}
    </va-list-label>

    <va-item clickable @click="onInfoClick">
      <va-item-section>
        <va-item-label>
          {{ $t('userProfile.menuInfoLabel') }}
        </va-item-label>

        <va-item-label caption>
          {{ $t('userProfile.menuInfoCaption') }}
        </va-item-label>
      </va-item-section>
    </va-item>

    <va-item clickable @click="onSecurityClick">
      <va-item-section>
        <va-item-label>
          {{ $t('userProfile.menuSecurityLabel') }}
        </va-item-label>

        <va-item-label caption>
          {{ $t('userProfile.menuSecurityCaption') }}
        </va-item-label>
      </va-item-section>
    </va-item>
  </va-list>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    onInfoClick () {
      this.$emit('info')
    },
    onSecurityClick () {
      this.$emit('security')
    },
  },
}
</script>

<style lang="scss">
</style>
