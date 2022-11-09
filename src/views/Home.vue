<template>
  <div>
    <HomeMenu />
    <div class="main-container">
      <div class="loginsuccess-container">
        <h2 class="heading">Login Success!</h2>
        <div>
          <div>
            <div class="center">
              <p>Welcome {{this.$store.state.loginUser.data.user.name}} !</p>
              <p><b>Access Token- </b>{{this.$store.state.loginUser.token }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMenu from '@/components/Menu'

export default {
  name: 'home',
  components: {
    HomeMenu
  }
}
</script>
