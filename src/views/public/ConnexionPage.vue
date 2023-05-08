<template>
    <section class="section-connexion pd-top-section">
      <div class="page-padding">
          <div class="container-800">
              <div class="connexion-component">
                  <div class="w-title-contact">
                          <h1 class="h1__connexion">Connexion</h1>
                          <p class="txt__connexion">Connectez vous pour accéder à votre profil.</p>
                    </div>
                    <form-connexion></form-connexion >
              </div>
          </div>
      </div>
    </section>
  </template>

<script>
import FormConnexion from '../../components/public/FormConnexion.vue';
export default {
    components: {
        FormConnexion
    }
}
</script>

<style>

.section-connexion {
    padding-bottom: 7rem;
    min-height: 77.02vh;
    height: 100%;
}

.connexion-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.h1__connexion {
    margin-bottom: 1rem;
}

.txt__connexion {
    margin-bottom: 1rem;
}


</style>