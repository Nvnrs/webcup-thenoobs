<template>   
    <form @submit.prevent @submit="connexion" class="form-connexion">
        <div class="w-input-form-connexion">
            <input type="email" class="input__form-connexion" placeholder="Votre e-mail" v-model="emailValue" required>
        </div>
        <div class="w-input-form-connexion">
            <input  type="password" class="input__form-connexion" placeholder="Votre mot de passe" v-model="passwordValue" required>
        </div>
        <div class="w-btn-form-connexion">
            <button class="btn-color">Envoyer</button>
        </div>
    </form>
    <div class="redirection-inscription">
        <p> Vous n'avez pas de compte ? <router-link class="link-color" to="inscription">Cliquer ici pour le créer. </router-link></p>
    </div>
    <div class="loader-connexion" v-if="loaderShow">
        <loader message="Patientez ..."></loader>
    </div>
    <div class="error-connexion" v-if="errorShow">
        <p class="error__msg-connexion">{{ errorMessage }}</p>
    </div>
</template>

<script>
import Loader from '@/components/global/Loader.vue'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
    components: {
        Loader
    }, 
    data() {
        return {
            emailValue: '', 
            passwordValue: '',
            loaderShow: false, 
            errorShow: false, 
            errorMessage : '',
        }
    }, 
    computed: {
        ...mapGetters(['GE_auth'])
    }, 
    methods: {
        connexion() {
            this.loaderShow = true  
            signInWithEmailAndPassword(this.GE_auth, this.emailValue, this.passwordValue)
                .then(data => {
                    this.loaderShow = false
                    this.$router.push('/mon-compte/prediction')
                })
                .catch (error => {
                    const typeError = error.code
                    switch (typeError){
                        case 'auth/wrong-password':
                            this.loaderShow = false
                            this.errorShow = true
                            this.errorMessage = 'Mot de passe incorrect.';
                        break;
                        case 'auth/user-not-found':
                            this.loaderShow = false
                            this.errorMessage = true
                            this.errorMessage = 'Utilisateur non trouvé.';
                        break;
                        case 'auth/invalid-email':
                            this.loaderShow = false
                            this.errorMessage = true
                            this.errorMessage ='Adresse e-mail non valide.';
                        break;
                        default:
                            this.loaderShow = false
                            this.errorMessage = true
                            this.errorMessage ='Erreur de connexion. ';
                        break;
                    }
                })
        }
    }
}
</script>


<style>
.form-connexion {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 
    width: 100%;
}

.w-btn-form-connexion {
    margin-bottom: 1rem;
}

.loader-connexion {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.error-connexion {
    margin-top: 1rem;
    margin-bottom: 1rem;
}


.error__msg-connexion {
    color: #9d0000;
    background: #ffdede;
    border-radius: 0.2rem;
    padding: 0.5rem 2rem;
}

</style>