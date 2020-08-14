<template>
  <form @submit.prevent="onsubmit">
    <va-input
      v-model="email"
      type="email"
      :label="$t('auth.email')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <va-input
      v-model="password"
      type="password"
      :label="$t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />

    <div class="d-flex justify--center mt-3">
      <va-button type="submit" class="my-0">{{ $t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
    }
  },
  computed: {
    formReady () {
      return !this.emailErrors.length && !this.passwordErrors.length
    },
  },
  methods: {
    onsubmit () {
      this.emailErrors = this.email ? [] : ['Email is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
      if (!this.formReady) {
        return
      }

      this.$store.commit('setLoginId', {
        loginId: this.email,
      })
      this.$store.commit('setLoginPassword', {
        loginPassword: this.password,
      })

      /*
      this.$store.dispatch('getLoginUserName')
        .finally(() => {
          if (this.$store.state.loginSucceeded) {
            console.log('リモートログイン成功')
            this.$router.push({ name: 'dashboard' })
          } else {
            console.log('リモートログイン失敗')
          }
        })
      */
      this.$store.commit('setLoginUserName', {
        loginUserName: '山田ローカル太郎',
      })
      this.$store.commit('setLoginSucceeded', {
        loginSucceeded: true,
      })
      console.log('ローカルログイン成功')
      this.$router.push({ name: 'dashboard' })
    },
  },
}
</script>

<style lang="scss">
</style>
