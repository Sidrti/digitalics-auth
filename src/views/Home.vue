<template>
  <section class="section-hero section-shaped my-0">
      <div class="shape shape-style-1 shape-primary">
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-50"></span>
          <span class="span-75"></span>
          <span class="span-100"></span>
          <span class="span-75"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
      </div>
      <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
              <div class="row justify-content-center align-items-center">
                  <div class="col-lg-7 text-center pt-lg">
                    <h2 class="text-white font-bold">WELCOME {{this.$store.state.loginUser.data.user.name}} !</h2>
                      <!-- <img src="img/brand/white.png" style="width: 200px;" class="img-fluid"> -->
                      <p class="lead text-white mt-4 mb-5">You are all set !</p>
                      <div class="btn-wrapper">
                          <base-button tag="a"
                                       href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                       class="mb-3 mb-sm-0"
                                       type="info"
                                       icon="fa fa-code">
                              Go to extension
                          </base-button>
                      </div>
                  </div>
              </div>
             
          </div>
      </div>
  </section>
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
