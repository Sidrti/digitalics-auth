<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { getUserDetails } from './service/authService';
export default {
  name: 'vue_signup',
  mounted() {
    if (this.$store.getters.isUserLogined) { 
      getUserDetails().then(res => {
          this.$store.commit('updateUserData', res)
      });
    }
  }
}
</script>
