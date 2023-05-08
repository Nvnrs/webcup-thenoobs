<template>
  <div class="footer">
    <div class="page-padding">
        <div class="container-1400">
            <div class="footer-component">
                <router-link class="w-logo-footer" to="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/LOGO_IIR.png?alt=media&token=e0e4a63a-2e2e-4fbe-a92c-3d46bc3c2436" alt="" class="img__logo-navbar">
                </router-link>
                <div class="w-links-footer">
                    <router-link class="link-white" to="/">Accueil</router-link>
                    <router-link class="link-white"  to="/onirix">Onirix</router-link>
                    <router-link class="link-white"  to="/a-propos">A propos</router-link>
                    <router-link class="link-white"  to="/contact">Contact</router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-footer">
        <p class="txt__copyright-footer"> @ 2023 webcup. The noobs</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.footer {
    background: var(--primary-color);
    color: white;
}

.footer-component {
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding-top: 4rem;
} 

.w-logo-footer {
    height: 3rem;
    margin-bottom: 1.5rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.w-logo-footer:hover{
    opacity: 0.8;
}

.img__logo-footer {
    height: 100%;
    width: 100%;
}

.w-links-footer {
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
    text-align: center;
}

.copyright-footer {
    display: flex;
    justify-content: center;
    border-top: solid 1px white;
    padding: 2rem 2.5rem;
    text-transform: uppercase;
}

@media only screen and (max-width: 600px) {
    .w-links-footer{
        flex-direction: column;
    }
}

</style>