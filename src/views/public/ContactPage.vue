<template>
  <section class="section-contact pd-top-section">
    <div class="page-padding">
        <div class="container-1400">
            <div class="contact-component">
                <div class="w-title-contact">
                        <span class="span-top-title-contact">CONTACT</span>
                        <h1 class="h1__contact">Contactez-nous !</h1>
                        <p class="txt__contact">Pour toutes vos questions ou demandes d'informations. </p>
                    </div>
                    <form-contact></form-contact>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import FormContact from '@/components/public/FormContact.vue'
export default {
    components: {
        FormContact
    }
}
</script>

<style>
.section-contact {
    padding-bottom: 7rem;
    min-height: 77.02vh;
    height: 100%;
}

.contact-component {
    max-width: 800px;
    width: 100%;
}

.span-top-title-contact {
    text-transform: uppercase;
    color: var(--white-color);
    opacity: 0.5;
}

.h1__contact {
    margin-bottom: 1rem;
}

.txt__contact {
    margin-bottom: 2rem;
}

</style>