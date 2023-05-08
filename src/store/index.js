import { createStore } from "vuex";
import db from '@/firebase/index.js'
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from 'firebase/auth'


export default createStore({
    state: {
        auth: getAuth(), 
        userId: '', 
        userLogged: null, 
        dreamsAnswers: [], 
        showPopUp: false
    }, 
    getters: {
        /* LOGGIN */
        GE_auth(state){
            return state.auth
        }, 
        GE_userLogged(state) {
            return state.userLogged
        }, 
        /* DREAMS ANSWERS */ 
        GE_dreamsAnswers(state) {
            return state.dreamsAnswers
        }, 
        GE_showPopUp (state) {
            return state.showPopUp
        }
    }, 
    mutations:  {
        /* POP UP*/
        MU_modifyStatePopUp(state) {
            state.showPopUp = true
        },
        MU_closePopUp(state) {
            state.showPopUp = false
        }, 
        /* LOGGIN */
        MU_userIsLogged(state, user) {
            state.userLogged = true
            state.userId = user.uid
        }, 
        MU_userIsNotLogged(state) {
            return state.userLogged = false
        }, 
        /* DREAMS ANSWERS */ 
        MU_setDreamsAnswers(state, dreamAnswer ){
            state.dreamsAnswers.push(dreamAnswer)
        }
    },
    actions:  {
        /* DREAMS ANSWERS */ 
        async AC_sendDreamsAnswers(context, dreamAndAnswer) {
            const dreamAnswer = {
                reve: dreamAndAnswer.dream, 
                prediction: dreamAndAnswer.answer, 
                utilisateur: context.state.userId
            }

            const idDoc = uuidv4()

            // envoie dans firebase
            await setDoc(doc(db, "reves-utilisateurs", idDoc), dreamAnswer) 
            
            // placer en local
            context.commit('MU_setDreamsAnswers', dreamAnswer)
        }, 
        async AC_fetchDreams(context){
            const querySnapshot = await getDocs(collection(db, "reves-utilisateurs"));
            querySnapshot.forEach((doc) => {
                if (doc.data().utilisateur === context.state.userId) {
                    const dreamAnswer = doc.data()
                    context.commit('MU_setDreamsAnswers', dreamAnswer)
                }
        });
        }, 
    }
})