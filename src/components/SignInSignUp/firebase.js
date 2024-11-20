import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "signin-signup-d52d6.firebaseapp.com",
    projectId: "signin-signup-d52d6",
    storageBucket: "signin-signup-d52d6.firebasestorage.app",
    messagingSenderId: "336353010636",
    appId: "1:336353010636:web:903e26b9d44dccab3fb369",
    measurementId: "G-78SVEY2P0V"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };