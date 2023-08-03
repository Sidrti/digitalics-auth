<template>
    <section class="section section-shaped section-lg my-0" style="background-image:url('img/Banner.png'); background-size: cover;">
        <!-- <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> -->
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card shadow
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
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3"
                                            v-model="form.name">
                                </base-input>
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
                                <!-- <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="onSubmit">Create account</base-button>
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
                          <a href="/login" class="text-white">
                              <small>Go To Login</small>
                          </a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SocialLogin from '@/components/SocialLogin'
import {getRegister} from '../service/authService'
export default {
  name: 'signup',
  components: {
    SocialLogin
  },
  data() {
    return {
      form:{}
    }
  },
  methods: {
    onSuccess(user) {
      const password = Math.floor((Math.random() * 1000000000) + 1).toString();
      const data = { email:user.getBasicProfile().getEmail(),password:password,name:user.getBasicProfile().getName() };
      this.registerApi(data);

    },
    onFailure(error) {

    },
    async onSubmit() {
    //   evt.preventDefault();
      const data = { email: this.form.email, password: this.form.password,name:this.form.name };
      this.registerApi(data);
    },
    registerApi(data) {
        getRegister(data).then(res => {
            if (res.status === 200) {
                this.$bvToast.toast('Registration successful', {
                    title: "Welcome To Digitalics",
                    variant: "success",
                    solid: true
                })
                this.$router.push('/login');
            }
            else {
                this.$bvToast.toast('Something went wrong', {
                title: "Registraton Failed",
                variant: "Danger",
                solid: true
            })
                // console.log("errors", res);
            }
        });
    }
  },
}
</script>
