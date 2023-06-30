<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand" to="/">
                <img src="img/brand/Logo.png" alt="logo" style="height: 60px;">
            </router-link>

            <!-- <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Components</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                    world's most popular framework for building responsive sites.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Components</h5>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                    compiling Scss, change brand colors and more.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown>
            </ul> -->
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block" v-if="this.$store.getters.isUserLogined">
                    <b-card-footer style="background-color: #9ee7ff4a;">
                        Subscription: <strong>{{ computeSubscription }} </strong>
                        <router-link to="/subscription" class="btn btn-primary">
                            <span class="nav-link-inner--text">Upgrade</span>
                        </router-link>
                    </b-card-footer>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a to="#" class="btn btn-success btn-icon">
                        <span class="btn-inner--icon">
                            <i class="fa fa-cloud-download mr-1" style="color: white;"></i>
                        </span>
                        <span class="nav-link-inner--text text-white">Download Extension</span>
                    </a>
                </li>
                <li v-if="!user" class="nav-item d-none d-lg-block">
                    <router-link to="/login" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                            <i class="fa fa-sign-in mr-1"></i>
                        </span>
                        <span class="nav-link-inner--text">Login</span>
                    </router-link>
                </li>
                <li v-if="user" class="nav-item d-none d-lg-block">
                    <a href="/login" @click="logout" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                            <i class="fa fa-sign-out mr-1"></i>
                        </span>
                        <span class="nav-link-inner--text">Logout</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { removeItem } from '@/config/utils'

export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown
    },
    computed: {
        user() {
            return localStorage.getItem('user');
        },
        computeSubscription() {
            if(this.$store.getters.isUserLogined) {
                if( this.$store.getters.getLoginUserInfo.data.user.current_plan == 'start') {
                return 'Start Plan'
            }
            if( this.$store.getters.getLoginUserInfo.data.user.current_plan == 'business') {
                return 'Business Plan'
            }
            if( this.$store.getters.getLoginUserInfo.data.user.current_plan == 'business_plus') {
                return 'Business Plus Plan'
            }
            if( this.$store.getters.getLoginUserInfo.data.user.current_plan == 'subscription_end') {
                return 'Subscription Expired'
            }
            if( this.$store.getters.getLoginUserInfo.data.user.current_plan == 'trial_end') {
                return 'Trial End'
            }
            else {
                return 'None'
            }
            }
            else {
                return 'Free Trial'
            }
        }
    },
    methods:{
        logout () {
            removeItem('user')
            router.push('/login')
        }
    }
};
</script>
<style>

</style>
