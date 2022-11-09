<template>
    <div class="main-container">
        <form @submit="onSubmit"> 
            <div class="box-container">
                <h2 class="heading">
                    Create Your Account
                </h2>
                <div class="form-fields">
                    <input id="user_name" name="username" type="text" placeholder="Full name" v-model="form.name">
                </div>
                <div class="form-fields">
                    <input id="email" name="email" type="text" placeholder="Email Address" v-model="form.email">
                </div>
                <div class="form-fields">
                    <input id="password" name="password" type="text" placeholder="Password" v-model="form.password">
                </div>
                <div class="form-fields">
                <button class="createaccount" name="commit" type="submit">
                     Create your account
                </button>
                </div>
                <div class="login-choice"><span>or sign up with</span></div>
                <SocialLogin @onSuccess="onSuccess" @onFailure="onFailure"/>
                <div>
                    <p class="center">
                        By signing up you agree to the
                        <a href="#">Terms of Service</a>.
                    </p>
                </div>
            </div>
        </form>
        <div class="footer">
            <p>Already have an account? <a href="/login"> Sign In</a></p>
        </div>
    </div>
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
    async onSubmit(evt) {
      evt.preventDefault();
      const data = { email: this.form.email, password: this.form.password,name:this.form.name };
      this.registerApi(data);
    },
    registerApi(data) {
        getRegister(data).then(res => {
            if (res.status === 200) {
                console.log("success", res);
                alert("Register success");
                this.$router.push('/login');
            }
            else {
                alert("Register Failed");
                console.log("errors", res);
            }
        });
    }
  },
}
</script>
