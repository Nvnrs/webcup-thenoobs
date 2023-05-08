<template>
    <div class="navbar">
        <div class="page-padding">
            <div class="container-1400">
                <div class="navbar-component">
                    <router-link class="w-logo-navbar" to="/">
                        <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/LOGO_IIR.png?alt=media&token=e0e4a63a-2e2e-4fbe-a92c-3d46bc3c2436" alt="" class="img__logo-navbar">
                    </router-link>
                    <div class="right-navbar">
                        <div class="w-links-navbar">
                            <router-link to="/" class="link__navbar">Accueil</router-link>
                            <router-link to="/onirix"
                            class="link__navbar">Onirix</router-link>
                            <router-link to="/a-propos"
                            class="link__navbar">A propos</router-link>
                            <router-link to="/contact"
                            class="link__navbar">Contact</router-link>
                        </div>
                        <div class="w-btns-navbar">
                            <router-link class="btn-account__navbar" to="/connexion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>
                            </router-link>
                            <router-link to="/mon-compte"
                            class="btn-color btn-nav">Prédire mon rêve</router-link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.navbar {
    color: white;
    width: 100%;
    position: fixed;
    z-index: 998;
    top: 1.5rem;
}

.navbar-component{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primary-color);
    padding: 1.3rem 2rem;
    border-radius: 0.7rem;
    position: relative;
    z-index: 1;
}

.navbar-component::before {
    content: '';
    z-index: 997;
    display: block;
    width: 98%;
    height: 2rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.7rem; 
    margin: auto;
    background: var(--primary-color);
    opacity: 0.2;
    border-radius: 0.7rem;    
}



.w-logo-navbar {
    height: 3rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.w-logo-navbar:hover {
    opacity: 0.8;
}

.img__logo-navbar {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.right-navbar {
    display: flex;
    align-items: center;
    gap: 4rem;
}

.w-links-navbar {
    display: flex;
    gap: 2rem;
}

.link__navbar {
    position: relative;
    transition: 0.3s ease-in-out;
}

.link__navbar::before {
    content: '';
    width: 0;
    height: 1px;
    position: absolute;
    bottom: -8px;
    left: 0;
    transition: 0.2s ease-in-out;
    background: var(--secondary-color);
}

.link__navbar:hover{
    color: var(--secondary-color);
}

.link__navbar:hover::before {
    width: 100%;
}

.w-btns-navbar {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.btn-account__navbar  {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.btn-account__navbar:hover {
    color: var(--secondary-color);
}


.btn-nav {
    padding: 0.8rem 2.5rem!important;
}

@media only screen and (max-width: 990px){
    .navbar {
        display: none;
    }
}
</style>