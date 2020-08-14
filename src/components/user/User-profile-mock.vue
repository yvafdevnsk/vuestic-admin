<template>
  <div class="user-profile">
    <div class="row">
      <div class="flex xs4">
        <user-profile-photo />
        <user-profile-menu
          class="mt-3"
          v-on:info="onMenuInfoClick"
          v-on:security="onMenuSecurityClick"
        /><!-- margin-top:3 -->
      </div>
      <div class="flex xs8">
        <user-profile-edit-info v-if="showInfo" />
        <user-profile-edit-security v-if="showSecurity" />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfilePhoto from './User-profile-photo-mock'
import UserProfileMenu from './User-profile-menu-mock'
import UserProfileEditInfo from './User-profile-edit-info-mock'
import UserProfileEditSecurity from './User-profile-edit-security-mock'

export default {
  name: 'user-profile',
  components: {
    UserProfilePhoto,
    UserProfileMenu,
    UserProfileEditInfo,
    UserProfileEditSecurity,
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    showInfo () {
      return this.$store.state.userProfileShowInfo
    },
    showSecurity () {
      return this.$store.state.userProfileShowSecurity
    },
  },
  methods: {
    onMenuInfoClick (event) {
      this.$store.commit('setUserProfileShowInfo', {
        show: true,
      })
      this.$store.commit('setUserProfileShowSecurity', {
        show: false,
      })
    },
    onMenuSecurityClick (event) {
      this.$store.commit('setUserProfileShowInfo', {
        show: false,
      })
      this.$store.commit('setUserProfileShowSecurity', {
        show: true,
      })
    },
  },
}
</script>

<style lang="scss">
</style>
