<template>
    <section class="section-inscription pd-top-section">
      <div class="page-padding">
          <div class="container-800">
              <div class="inscription-component">
                  <div class="w-title-contact">
                          <h1 class="h1__inscription">Inscription</h1>
                          <p class="txt__inscription">Inscrivez-vous afin d'accéder à notre IA ONIRIX.</p>
                    </div>
                    <form-inscription></form-inscription>
              </div>
          </div>
      </div>
    </section>
  </template>

<script>
import FormInscription from '@/components/public/FormInscription.vue';


export default {
    components: {
        FormInscription
    }
}
</script>

<style>

.section-inscription {
    padding-bottom: 7rem;
    min-height: 77.02vh;
    height: 100%;
}

.inscription-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.h1__inscription {
    margin-bottom: 1rem;
}

.txt__inscription {
    margin-bottom: 1rem;
}


</style>