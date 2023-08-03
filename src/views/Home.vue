<template>
  <div>
    <section class="section-hero section-shaped my-2" style="background-image:url('img/Banner2.png'); background-size: cover;">
      <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
              <div class="row justify-content-center align-items-center">
                  <div class="col-lg-7 text-center pt-lg">
                    <h2 class="text-white text-uppercase">👋 WELCOME !</h2>
                      <p class="text-white my-2">Happy to have you on Digitalics {{this.$store.state.loginUser.data.user.name}}</p>
                      <p class="text-white my-2">You are successfully LoggedIn</p>
                    <router-link to="#" class="btn btn-success btn-icon mt-5">
                        <span class="nav-link-inner--text">Got TO Extension</span>
                    </router-link>
                  </div>
              </div>
             
          </div>
      </div>
  </section>
  <Subscription></Subscription>
  </div>
</template>

<script>
import HomeMenu from '@/components/Menu'
import Subscription from './Subscription.vue';

export default {
  name: 'home',
  components: {
    HomeMenu,
    Subscription
}
}
</script>
