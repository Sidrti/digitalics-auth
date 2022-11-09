<template>
  <div class="main-container">
    <form @submit="onSubmit"> 
      <div class="box-container">
        <h2 class="heading">Sign In</h2>
        <div class="form-fields">
          <input id="email" name="email" type="text" placeholder="Email Address" v-model="form.email">
        </div>
        <div class="form-fields">
          <input id="password" name="password" type="text" placeholder="Password" v-model="form.password">
        </div>
        <div class="form-fields">
          <button class="signIn" name="commit" type="submit">
            Sign In
          </button>
        </div>
        <div class="login-choice"><span>or Sign In with</span></div>
        <SocialLogin @onSuccess="onSuccess" @onFailure="onFailure"/>
      </div>
    </form>
    <div class="footer">
       <p>Don't have an account? <a href="/signup"> Create one now</a></p>
    </div>
  </div>
</template>

<script>
import {getLogin,getGoogleLogin} from '../service/authService'
import SocialLogin from '@/components/SocialLogin'
export default {
  name: 'login',
  components: {
    SocialLogin
  },
  mounted() {
   
  },
  data() {
    return {
      form:{}
    }
  },
  methods: {
    onSuccess(user) {
      console.log(user.getBasicProfile().getName());

      const data = { email:user.getBasicProfile().getEmail() };
      getGoogleLogin(data).then(res => {
        console.log("errors",res);
        if(res.status === 200) {
          console.log("success",res);
          alert("Login success");
          this.$store.commit('setLoginUser', res)
          window.location.href = '/home'
        }
        else {
          alert("Login Failed");
          console.log("errors",res);
        }
        
      });
    },
    onFailure(error) {

    },
    async onSubmit(evt) {
      evt.preventDefault();
      const data = { email:this.form.email, password:this.form.password };
      getLogin(data).then(res => {
        console.log("errors",res);
        if(res.status === 200) {
          console.log("success",res);
          alert("Login success");
          this.$store.commit('setLoginUser', res)
          window.location.href = '/home'
        }
        else {
          alert("Login Failed");
          console.log("errors",res);
        }
        
      });
    }
  },
}
</script>
