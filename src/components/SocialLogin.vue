<template>
    <div class="signup-buttons">
        <div id="fb-root"></div>
        <base-button type="neutral"  @click.prevent="loginWithGoogle">
            <img slot="icon" src="img/icons/common/google.svg">
            Google
        </base-button>
    </div>
</template>

<script>
import router from '@/router/router'

export default {
  name: 'login_signup_social',
  methods: {
    loginWithGoogle () {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          this.$emit('onSuccess',GoogleUser);
          // on success do something
          // console.log('GoogleUser', GoogleUser)
          // console.log('getId', GoogleUser.getId())
          // console.log('basicprofile', GoogleUser.getBasicProfile().getName())
          // console.log('getBasicProfile', GoogleUser.getBasicProfile())
          // console.log('getAuthResponse', GoogleUser.getAuthResponse())
          // var userInfo = {
          //   loginType: 'google',
          //   google: {
          //     auth: GoogleUser.getAuthResponse(),
          //     user: {
          //       name: GoogleUser.getBasicProfile().getName(),
          //       email: GoogleUser.getBasicProfile().getEmail(),
          //       profileImage: GoogleUser.getBasicProfile().getImageUrl()
          //     }
          //   }
          // }
          // this.$store.commit('setLoginUser', userInfo)
          // router.push('/home')
        })
        .catch(error => {
          this.$emit('onFailure',error);
          console.log('error', error)
        })
    },
  }
}
</script>
