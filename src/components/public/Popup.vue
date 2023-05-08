<template>
    <section class="section-pop-up" v-if="GE_showPopUp">
        <div class="page-padding">
            <div class="popup-component">
                <div class="w-img-popup">
                    <img src="https://firebasestorage.googleapis.com/v0/b/webcup-thenoobs.appspot.com/o/cauchemar.webp?alt=media&token=7b34737f-dba3-42d9-a040-8afd4feeca8f" >
                </div>
                <div class="toggle-close" @click="closePopUp">X</div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
import { mapGetters, mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
      }
    }, 
    computed: {
        ...mapGetters(['GE_showPopUp'])
      }, 
    methods: {
      ...mapMutations(['MU_closePopUp']), 

      closePopUp() {
        this.MU_closePopUp()
      }
      }
  };
  </script>

  <style>


  .section-pop-up {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.443);
    backdrop-filter: blur(10px);
    top: 1;
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: center; 
    align-items: center;
  }

  .popup-component {
    border: solid 2px black;
    padding: 2rem;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    background: var(--grey-color);
    position: relative;
  }

  .w-img-popup {
    height: 70vh;
    width: 50vw;
    border-radius: 1rem;
    overflow: hidden;
  }

  .w-img-popup > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .toggle-close {
    display: inline-block;
    background: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    font-size: 1.1rem;
    font-weight: 900;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px ) {

    .w-img-popup {
        width: 70vw;
        height: 40vh;
    }
  }

</style>