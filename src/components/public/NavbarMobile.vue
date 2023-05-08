<template>
    <div class="navbar nav--mobile">
        <div class="page-padding">
            <div class="container-1400">
                <div class="navbar-component">
                    <router-link class="w-logo-navbar" to="/">
                        <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/LOGO_IIR.png?alt=media&token=e0e4a63a-2e2e-4fbe-a92c-3d46bc3c2436" alt="Logo institut internationale des rêves " class="img__logo-navbar">
                    </router-link>
                    <div class="toggle-nav-mobile" 
                    @click="openNav = !openNav">
                    <transition name="iconNav" mode="out-in">
                        <!-- icon for open -->
                        <svg v-if="!openNav" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>

                        <!-- icon for close -->
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </transition>
                    </div>
                    <div class="w-btns-navbar">
                            <router-link to="/connexion" class="btn-account__navbar snipcart-customer-signin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>
                            </router-link>
                    </div>

                    <transition name="mobileNav">
                    <div class="content-nav-mobile"
                    v-show="openNav">
                        <div class="w-links-navbar">
                            <router-link to="/" class="link-white">Accueil</router-link>
                            <router-link to="/onirix"
                            class="link-white">Onirix</router-link>
                            <router-link to="/a-propos"
                            class="link-white">A propos</router-link>
                            <router-link to="/contact"
                            class="link-white">Contact</router-link>
                        </div>
                        <div class="w-btn-mobile-nav">
                            <router-link to="/mon-compte"
                            class="btn-color">Prédire mon rêve</router-link>
                        </div>
                    </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            openNav: false, 
        }
    }, 
    methods: {
    }
}
</script>

<style>

.nav--mobile {
    display: none;
    color: white;
    margin-top: 1.5rem;
}

.toggle-nav-mobile {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.content-nav-mobile {
    background: var(--primary-color);
    padding: 2rem;
    border-radius: 0.7rem;
    border-top: solid 2px white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -320px;
}

.w-btn-mobile-nav {
    margin-top: 2rem;
    display: flex;
}

.w-btn-mobile-nav> .btn-color {
    width: 100%;
}

/* ANIMATION*/ 

.mobileNav-enter-active,
.mobileNav-leave-active {
  transition: opacity 0.5s ease;
}

.mobileNav-enter-from,
.mobileNav-leave-to {
    opacity: 0;
}

.iconNav-enter-active,
.iconNav-leave-active {
  transition: opacity 0.2s ease;
}

.iconNav-enter-from,
.iconNav-leave-to {
    transform: rotate(190deg);
    opacity: 0;
}


@media only screen and (max-width: 990px){
    .nav--mobile {
        display: block;
    }
    .w-logo-navbar {
        height: 2.5rem;
        position: absolute;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
        z-index: -1
    }
    .w-links-navbar {
        flex-direction: column;
        align-items: center;
    }
}

@media only screen and (max-width: 600px){
    .w-logo-navbar{
        height: 2.3rem;
    }

    .toggle-nav-mobile {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
}
}

</style>