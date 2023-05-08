import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from '@/views/public/HomePage.vue'
import OnirixPage from '@/views/public/OnirixPage.vue'
import AboutPage from '@/views/public/AboutPage.vue'
import ContactPage from '@/views/public/ContactPage.vue'
import ConnexionPage from '@/views/public/ConnexionPage.vue'
import InscriptionPage from '@/views/public/InscriptionPage.vue'

/* USER ACCOUNT */ 
import AccountPage from '@/views/account/AccountPage.vue'
import PredictionPage from '@/views/account/PredictionPage.vue'
import MesRevesPage from '@/views/account/MesRevesPage.vue'

const router = createRouter({
    routes: [
        {
            path: '/', 
            name: 'Home', 
            component: HomePage
        }, 
        {
            path: '/onirix', 
            name: 'Onirix', 
            component: OnirixPage
        }, 
        {
            path: '/a-propos', 
            name: 'About', 
            component: AboutPage
        }, 
        {
            path: '/contact', 
            name: 'Contact', 
            component: ContactPage
        }, 
        {
            path: '/connexion', 
            name: 'Connexion', 
            component: ConnexionPage
        }, 
        {
            path: '/inscription', 
            name: 'Inscription', 
            component: InscriptionPage
        }, {
            path: '/mon-compte', 
            name: 'Compte', 
            component: AccountPage, 
            meta: {
                requiresAuth : true
            }, 
        },{
            path: '/mon-compte/prediction', 
            name: 'Prediction', 
            component: PredictionPage, 
            meta: {
                requiresAuth : true
            }, 
        }, 
        {
        
                path: '/mon-compte/mes-reves', 
                name: 'MesReves', 
                component: MesRevesPage, 
                meta: {
                    requiresAuth : true
                }, 
        }
    ], 
    history: createWebHashHistory()
})


import store from '@/store/index.js'


router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.state.userLogged === true) {
            next()
        }
        else {
            console.log("vous n'avez pas accès");
            next('/connexion')
        }
    }else {
        next()
    }
})


export default router