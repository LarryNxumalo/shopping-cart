import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

import Home from './views/Home';
import CartView from './views/CartView';



export default new Router({
    routes: [{
            path: '/',
            // redirect: 'products',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        }

    ]
});
