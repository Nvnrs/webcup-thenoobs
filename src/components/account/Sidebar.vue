<template>
  <div class="sidebar">

    <div class="top-sidebar">
        <div class="w-logo-sidebar">
        <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/logo%20Onirix.webp?alt=media&token=4b3b1086-4ad7-4cf4-83e4-7cb6e69a7e99" alt="">
        </div>
        <div class="w-links-sidebar">
        <router-link to="/mon-compte/prediction" class="link__sidebar"> Prediction </router-link>
        <router-link to="/mon-compte/mes-reves" class="link__sidebar">Mes rêves</router-link>
    </div>
    </div>

    <div class="w-btn-sidebar">
        <button class="btn-color" @click="deconnexion">Déconnexion</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { signOut } from 'firebase/auth';

export default {
    computed: {
        ...mapGetters(['GE_auth'])
    }, 
    methods: {
        ...mapActions(['MU_sendDreamsAnswers']), 

        deconnexion(){
            signOut(this.GE_auth)
            .then (() => {
                console.log("deconnexion");
                this.$router.push('/')
            })
        }

    }, 
}
</script>

<style>
.sidebar {
    height: 100vh;
    position: fixed;
    left: 0;
    padding: 1rem 2rem;
    background: var(--black-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.top-sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.w-logo-sidebar {
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.w-logo-sidebar> img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.w-links-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.link__sidebar {
    padding: 1rem 4rem;
    transition: 0.3s ease-in-out;
}

.link__sidebar:hover {
    background: var(--primary-color);
    border-radius: 0.4rem;
}

.link__sidebar:active {
    background: var(--primary-color);
    border-radius: 0.4rem;
}
</style>