<template>
    <div class="demo11">
        <!-- <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
            :cancel-url="cancelURL" @loading="v => loading = v" @payment-method-attached="handlePaymentSuccess" /> -->
        <!-- <PricingCard></PricingCard> -->
        <div class="container">
            <h3 class="text-center text-white font-weight-bold mb-4">Pricing</h3>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="pricingTable11">
                        <div class="pricingTable-header">
                            <i class="fa fa-adjust"></i>
                            <div class="price-value"> €69.00 <span class="month">per month</span> </div>
                        </div>
                        <h3 class="heading">Start</h3>
                        <div class="pricing-content">
                            <ul>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Introductory call </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b>Import data </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    bulk invites </li>
                                    <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    personalised bulk invites </li>
                                <li><b><i class="fa fa-close text-danger" aria-hidden="true"></i></b> Send automated
                                    messages in bulk </li>
                                <li><b><i class="fa fa-close text-danger" aria-hidden="true"></i></b> Auto view
                                    profiles </li>
                                <li><b><i class="fa fa-close text-danger" aria-hidden="true"></i></b> Create campaign </li>
                            </ul>
                        </div>
                        <div class="pricingTable-signup">
                            <a @click="submit(plansId[0])">{{ computeCurrentPlanText(plansId[0]) }}</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-12">
                    <div class="pricingTable11 green">
                        <div class="pricingTable-header">
                            <i class="fa fa-briefcase"></i>
                            <div class="price-value"> €99.00 <span class="month">per month</span> </div>
                        </div>
                        <h3 class="heading">Business</h3>
                        <div class="pricing-content">
                            <ul>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Introductory call </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b>Import data </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    bulk invites </li>
                                    <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    personalised bulk invites </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    messages in bulk </li>
                                <li><b><i class="fa fa-close text-danger" aria-hidden="true"></i></b> Auto view
                                    profiles </li>
                                <li><b><i class="fa fa-close text-danger" aria-hidden="true"></i></b> Create campaign </li>
                            </ul>
                        </div>
                        <div class="pricingTable-signup">
                            <a @click="submit(plansId[1])">{{ computeCurrentPlanText(plansId[1]) }}</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="pricingTable11 blue">
                        <div class="pricingTable-header">
                            <i class="fa fa-diamond"></i>
                            <div class="price-value"> €490.00 <span class="month">per month</span> </div>
                        </div>
                        <h3 class="heading">Business Plus</h3>
                        <div class="pricing-content">
                            <ul>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Introductory call </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b>Import data </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    bulk invites </li>
                                    <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    personalised bulk invites </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Send automated
                                    messages in bulk </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Auto view
                                    profiles </li>
                                <li><b><i class="fa fa-check text-success" aria-hidden="true"></i></b> Create campaign </li>
                            </ul>
                        </div>
                        <div class="pricingTable-signup">
                             <a @click="submit(plansId[2])">{{ computeCurrentPlanText(plansId[2]) }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createCheckoutSession } from '../service/authService';
import PricingCard from '../components/PricingCard.vue';
import { loadStripe } from '@stripe/stripe-js';

export default {
    components: { PricingCard },
    data() {
        return {
            loading: false,
            publishableKey: process.env.VUE_APP_PK,
            plansId: [
                {
                    price: 'price_1NNGVUEpboS7rbtADkYe1359', // The id of the recurring price you created in your Stripe dashboard
                    name: 'start'
                },
                {
                    price: 'price_1NNXenEpboS7rbtAxpea7RVC', // The id of the recurring price you created in your Stripe dashboard
                    name: 'business'
                },
                {
                    price: 'price_1NNXenEpboS7rbtAxpea7RVC', // The id of the recurring price you created in your Stripe dashboard
                    name: 'business_plus'
                },
            ],
            lineItems: [],
            successURL: process.env.VUE_APP_SUCCESS_URL,
            cancelURL: process.env.VUE_APP_CANCEL_URL,
        };
    },
    mounted() {
        console.log('User Info', this.$store.getters.isUserLogined);

        this.initializeStripe();
    },

    methods: {
        async initializeStripe() {
            this.stripe = await loadStripe(this.publishableKey);
        },
        async submit(plan) {
            if (this.$store.getters.isUserLogined) {
                try {
                    // const response = await axios.post('https://digitalics-api.boxinallsoftech.com/public/api/V1/create-checkout-session', {
                    //     priceId: plan.price,
                    //     email: this.$store.getters.getLoginUserInfo.data.user.email,
                    //     plan: plan.name
                    // });
                    const formData = {
                        priceId: plan.price,
                        email: this.$store.getters.getLoginUserInfo.data.user.email,
                        plan: plan.name
                    }
                     createCheckoutSession(formData).then(async response => {
                        // Retrieve the session ID from the response
                        const sessionId = response.sessionId;

                        // Redirect the user to the Stripe Checkout page
                        const { error } = await this.stripe.redirectToCheckout({
                            sessionId: sessionId
                        });

                        if (error) {
                            // Handle error
                        }
                    });
                } catch (error) {
                    console.log("err", error)
                    // Handle the error or display an error message to the user
                    // You can handle this based on your application's requirements
                }
            }
            else {

                window.location.href = '/register'
                this.$bvToast.toast('Lets create a account', {
                    title: "You need to create/login your account before checkout",
                    variant: "warning",
                    solid: true
                })
            }
        },
        computeCurrentPlanText(plan) {
            if (this.$store.getters.isUserLogined) {
                if (plan.name == this.$store.getters.getLoginUserInfo.data.user.current_plan) {
                    return 'Current Plan'
                }
                if (this.$store.getters.getLoginUserInfo.data.current_plan != null) {
                    return 'Change Plan'
                }
                return 'Free Trial'
            }
            else {
                return 'Free Trial'
            }

        }

    }
}
</script>