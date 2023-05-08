<template>

  <!-- PUBLIC -->
  <header v-if="!GE_userLogged">
    <popup></popup>
    <navbar-desktop></navbar-desktop>
    <navbar-mobile></navbar-mobile>
  </header>

  <!-- ADMIN -->


  <router-view></router-view>

  <!-- PUBLIC -->
  <footer v-if="!GE_userLogged"> 
    <footer-compo></footer-compo>
  </footer>

    <!-- ADMIN -->

</template>

<script>
import NavbarDesktop from './components/public/NavbarDesktop.vue';
import NavbarMobile from './components/public/NavbarMobile.vue';
import FooterCompo from '@/components/public/FooterCompo.vue'
import Popup from '@/components/public/Popup.vue';
import { onAuthStateChanged} from 'firebase/auth'
import { mapActions, mapGetters, mapMutations } from 'vuex';


export default {
  components:{
    NavbarDesktop, 
    NavbarMobile, 
    FooterCompo, 
    Popup
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['GE_auth', 'GE_userLogged', 'GE_showPopUp'])
  }, 
  watch: {
    GE_userLogged(newVal) {
      if (newVal === true) {
        this.AC_fetchDreams()
      }
    }
  }, 
  methods: {
    ...mapMutations(['MU_userIsLogged', 'MU_userIsNotLogged', 'MU_modifyStatePopUp']), 
    ...mapActions(['AC_fetchDreams']), 

    setPopup() {
      setTimeout(() => {
        this.MU_modifyStatePopUp()
      }, 5000)
    }
  }, 
  mounted(){
          onAuthStateChanged(this.GE_auth, (user) => {
              if (user) {
                this.MU_userIsLogged(user)
                this.$router.push('/mon-compte/prediction')
              } else {
                this.MU_userIsNotLogged()
              }
          }), 
          this.setPopup()
    }, 
}
</script>

<style>

</style>