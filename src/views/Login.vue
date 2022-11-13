<template>
  <section class="section section-shaped section-lg my-0">
      <div class="shape shape-style-1 bg-gradient-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="container pt-lg-md">
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <card type="secondary" shadow
                        header-classes="bg-white pb-5"
                        body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                      <template>
                          <div class="text-muted text-center mb-3">
                              <small>Sign in with</small>
                          </div>
                          <div class="btn-wrapper text-center">
                            <SocialLogin @onSuccess="onSuccess" @onFailure="onFailure"/>
                          </div>
                      </template>
                      <template>
                          <div class="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                          </div>
                          <form role="form">
                              <base-input alternative
                                          class="mb-3"
                                          placeholder="Email"
                                          addon-left-icon="ni ni-email-83"
                                          v-model="form.email">
                              </base-input>
                              <base-input alternative
                                          type="password"
                                          placeholder="Password"
                                          addon-left-icon="ni ni-lock-circle-open"
                                          v-model="form.password">
                              </base-input>
                              <div class="text-center">
                                  <base-button class="my-4" type="primary" @click="onSubmit">Sign In</base-button>
                              </div>
                          </form>
                      </template>
                  </card>
                  <div class="row mt-3">
                      <div class="col-6">
                          <!-- <a href="#" class="text-light">
                              <small>Forgot password?</small>
                          </a> -->
                      </div>
                      <div class="col-6 text-right">
                          <a href="/signup" class="text-light">
                              <small>Create new account</small>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
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
    async onSubmit() {
      // evt.preventDefault();
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
