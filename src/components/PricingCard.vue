<template>
    <div>
        
        <!-- <stripe-pricing-table pricing-table-id="prctbl_1NND1BEpboS7rbtAcrJXsUtb" class="bg"
publishable-key="pk_test_51NGd38EpboS7rbtApg2Ulci3vUCKuFskF8Gbg3qKhKPRrfuFox4hif2grsmW6AVlswJvEZeV2AdzzvXVbJIHiIGt00w2ZXemEC" style="background-color: #fff !important;">
</stripe-pricing-table> -->
        <stripe-pricing-table pricing-table-id="prctbl_1NNGWvEpboS7rbtACOWYSg6Q"
publishable-key="pk_test_51NGd38EpboS7rbtApg2Ulci3vUCKuFskF8Gbg3qKhKPRrfuFox4hif2grsmW6AVlswJvEZeV2AdzzvXVbJIHiIGt00w2ZXemEC">
</stripe-pricing-table> 
       <-- <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
            :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
        <button @click="submit">Subscribe!</button> -->
    </div>
</template>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
    components: {
        StripeCheckout,
    },
    data() {
        this.publishableKey = process.env.VUE_APP_PK;
        return {
            loading: false,
            lineItems: [
                {
                    price: 'price_1NNGVUEpboS7rbtADkYe1359', // The id of the recurring price you created in your Stripe dashboard
                    quantity: 1,
                },
            ],
            successURL: process.env.VUE_APP_SUCCESS_URL,
            cancelURL: process.env.VUE_APP_CANCEL_URL,
        };
    },
    methods: {
        submit() {
            // You will be redirected to Stripe's secure checkout page
            this.$refs.checkoutRef.redirectToCheckout();
        },
    },
};
</script>