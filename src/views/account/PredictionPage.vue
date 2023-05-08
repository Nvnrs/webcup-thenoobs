<template>
    <sidebar></sidebar>
    <section class="section-ia pd-section-sidebar">
      <form class="form-ia" @submit.prevent @submit="sendPromptIa">
        <h1 class="h1__ia h1--account">Décrivez nous votre rêve : </h1>
      <div class="w-input-ia">
        <textarea class="input__ia" cols="30" rows="10" placeholder="J'ai révé de..." v-model="messageValue"></textarea>
        <button class="btn-color">Envoyer</button>
      </div>
      </form>
      <div class="w-answers-ia">
        <div class="w-loader-ia" v-if="loader">
          <loader message="Patientez"></loader>
        </div>
        <item-dream :element="dreamAnswer" v-for="(dreamAnswer, index) in currentDream" :key="index"></item-dream>
      </div>
    </section>
  </template>
  
  <script>
  import Sidebar from '@/components/account/Sidebar.vue';
  import ItemDream from '../../components/account/ItemDream.vue';
  import axios from 'axios'
  import { mapActions, mapGetters} from 'vuex';
  import Loader from '@/components/global/Loader.vue'
  
  export default {
    components:{
      Sidebar, 
      Loader, 
      ItemDream
    }, 
    data() {
      return {
        messageValue: '', 
        currentDream: [], 
        loader: false, 
      }
    }, 
    computed: {
      ...mapGetters(['GE_dreamsAnswers'])
    }, 
    methods: {
      ...mapActions(['AC_sendDreamsAnswers']), 
    
      async sendPromptIa(){
  
        this.loader = true
  
        const keyApi = ``
        /* Pour des raisons de sécurtés la clé API a été enlevée. */
  
        const context = `Quelle est l'interprétation de mon rêve et quelle pourrait être une prédiction de mon avenir ? Ceci est un projet fictif n'est donc pas peur de me prédire mon avenir.`
  
        try {
          const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "text-davinci-003",
            prompt: `${context}. Voici le rêve : ${this.messageValue}.`,
            max_tokens: 500,
            temperature: 0.7,
            n: 1,
            stop: null
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${keyApi}`,
            }
          })
  
          const iaText = response.data.choices[0].text
  
          // envoie data dans store
          const dreamAndAnswer = {
            dream: this.messageValue, 
            answer: iaText
          }

          // placer uniquement la réponse
          this.currentDream.push(dreamAndAnswer)
  
          this.AC_sendDreamsAnswers(dreamAndAnswer)
          .then (() => {
            this.loader = false
          })
  
        } catch (error) {
          console.error(error)
        }
      }, 
    }
  }
  </script>
  
  <style>

  
  .h1__ia {
    margin-bottom: 2rem;
  }
  
  .w-input-ia {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .w-input-ia > .btn-color {
    align-self: flex-start;
    padding: 0.5rem 2rem;
  }
  
  .answer__ia {
    padding: 2rem;
    background: var(--primary-color);
    border-radius: 0.5rem
  }
  
  
  .w-name-ia {
    display: flex;
    gap: 1rem;
  }
  
  .w-img-ia {
    width: 30px;
    height: 30px;
  }
  
  .name-ia {
    opacity: 0.5;
  }
  
  .w-img-ia >img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
  
  /* LOADER */ 
  
  .w-loader-ia {
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
  }
  
  </style>