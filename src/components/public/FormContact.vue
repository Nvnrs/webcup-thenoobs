<template>   
    <form @submit.prevent @submit="checkForm" class="form-contact">
        <div class="l-2b-form-contact">
            <input type="text" placeholder="Votre prénom" class="input__form-contact" v-model="firstNameValue">
            <input type="text" placeholder="Votre Nom" class="input__form-contact" v-model="nameValue">
        </div>
        <div class="w-input-form-contact">
            <input type="email" class="input__form-contact" placeholder="Votre e-mail" v-model="emailValue">
        </div>
        <div class="w-input-form-contact">
            <textarea class="input__form-contact" name="" id="" cols="30" rows="10" placeholder="Votre message" v-model="messageValue"></textarea>
        </div>
        <div class="w-btn-form-contact">
            <button class="btn-color">Envoyer</button>
        </div>
        <div class="w-loader-form-contact" v-if="loader">
            <loader message="Patientez ..."></loader>
        </div>
        <div class="w-msg-form-contact" v-if="openMessage">
            <div class="good__msg-form-contact" v-if="messageSubmit">
                Votre message a bien été envoyé, nous vous ferons un retour dans les prochains jours. ✅
            </div>
            <div class="error__msg-form-contact" v-else>
                Merci de remplir tous les champs demandés afin de nous transmettre votre demande. ⛔️
            </div>
        </div>
    </form>
</template>

<script>

import Loader from '@/components/global/Loader.vue'
import db from '@/firebase/index.js'
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';



export default {
    components: {
        Loader
    },
    data(){
        return {
            firstNameValue: '', 
            nameValue: '', 
            emailValue: '', 
            messageValue: '', 
            loader: false, 
            openMessage: false, 
            messageSubmit: false
        }
    }, 
    methods: {
        async submitMessage() {
            // afficher loader
            this.loader = true

            // récupérer réponse formulaire
            const answer = {
                nom: this.nameValue, 
                prenom: this.firstNameValue, 
                email: this.emailValue, 
                message: this.messageValue
            }

            const idDoc = uuidv4()
            
            // envoie dans firebase
            await setDoc(doc(db, "reponse-form-contact", idDoc), answer)

            //afficher message ok 
            this.loader = false 
            this.messageSubmit= true
            this.openMessage = true
        }, 
        checkForm() {
            // si formulaire vide message erreur sinon envoyer les données
            if (this.firstNameValue.length && this.nameValue.length && this.emailValue.length && this.messageValue.length > 0) {
                this.submitMessage()
        } 
            else {
                console.log("pas ok");
                this.openMessage = true
                this.messageSubmit = false
        }
    }
    }, 
}
</script>

<style>

.form-contact {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.l-2b-form-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem; 
}

.input__form-contact {
    flex: 1 0 200px;
    width: 100%;
    background: var(--grey-color);
    border: none;
}

.w-btn-form-contact > button {
    width: 100%;
}

.w-loader-form-contact {
    display: flex;
    justify-content: center;
}

.w-msg-form-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.good__msg-form-contact {
    color: #009d3c;
    padding: 1rem;
    background: #deffeb;
}

.error__msg-form-contact {
    color: #9d0000;
    background: #ffdede;
    padding: 1rem;
}
</style>