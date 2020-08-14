<template>
  <va-card
    image="https://picsum.photos/300/200/?image=1043"
    :title="$t('userProfile.userNameTitle')"
  >
    {{userName}}
  </va-card>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    userName: {
      get () {
        return this.$store.state.loginUserName
      },
    },
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
