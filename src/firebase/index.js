import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// config firebase
const firebaseConfig = {
/* Pour des raisons de sécurités les identifiants firebase ont été enlevés. */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db 