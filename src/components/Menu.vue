<template>
    <div class="tab">
        <router-link v-if="this.$store.getters.isUserLogined" @click="logout()" class="tablinks">Logout</router-link>
        <router-link to="/login" class="tablinks">Sign In</router-link>
        <router-link to="/signup" class="tablinks">Sign Up</router-link>
    </div>
</template>

<script>
import router from '@/router/router'
import { removeItem } from '@/config/utils'

export default {
  name: 'signup_header',
  methods: {
    logout () {
      removeItem('user')
      router.push('/login')
    }
  }
}
</script>
