<template>
    <sidebar></sidebar>
    <section class="section-all-dreams pd-section-sidebar">
        <h1 class="h1__all-dreams h1--account">Tous mes rêves : </h1>
        <div class="w-items-all-dreams">
            <item-all-dreams :element="dream" v-for="(dream, index) in GE_dreamsAnswers" :key="index"></item-all-dreams>
        </div>
    </section>
</template>

<script>
import Sidebar from '../../components/account/Sidebar.vue';
import ItemAllDreams from '@/components/account/ItemAllDreams.vue'; 
import { mapGetters } from 'vuex';

export default {
    components: {
        Sidebar, 
        ItemAllDreams
    }, 
    computed: {
        ...mapGetters(['GE_dreamsAnswers'])
    }
}
</script>

<style>

.h1__all-dreams {
    margin-bottom: 2rem;
}

.w-items-all-dreams {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

</style>