<template>   
    <form @submit.prevent  @submit="inscription" class="form-inscription">
        <div class="w-input-form-inscription">
            <input type="text" class="input__form-inscription" placeholder="Votre nom d'utilisateur" v-model="nameValue" required>
        </div>
        <div class="w-input-form-inscription">
            <input type="email" class="input__form-inscription" placeholder="Votre e-mail" v-model="emailValue" required>
        </div>
        <div class="w-input-form-inscription">
            <input type="password" class="input__form-inscription" placeholder="Votre mot de passe" v-model="passwordValue" required>
        </div>
        <div class="w-btn-form-inscription">
            <button class="btn-color">Envoyer</button>
        </div>
        <div class="w-loader-form-inscription">
            <loader message="Patientez ..."></loader>
        </div>
    </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
    data() {
        return {
            emailValue: '', 
            passwordValue: '', 
            nameValue: ''
        }
    }, 
    computed: {
        ...mapGetters(['GE_auth', "GE_userLogged"])
    },
    methods: {
        ...mapMutations(['MU_userIsLogged']), 

        inscription(){
            createUserWithEmailAndPassword(this.GE_auth, this.emailValue, this.passwordValue)
                .then(data => {
                    const user = data.user
                    this.MU_userIsLogged() 
                    
                    return updateProfile(user, {
                        displayName: this.nameValue
                    })
                })
                .then (() => {
                    this.$router.push('/mon-compte/prediction')
                })
                .catch (error => {
                    console.log(error);
                })
        }
    }
}
</script>


<style>
.form-inscription {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 
    width: 100%;
}

</style>