import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXjY_HaLOqQwahgxEROfcR0JH1Zo-OR48",
  authDomain: "olx-clone-2-d3154.firebaseapp.com",
  projectId: "olx-clone-2-d3154",
  storageBucket: "olx-clone-2-d3154.appspot.com",
  messagingSenderId: "310423286252",
  appId: "1:310423286252:web:c1c67bebdff26f5f5950c9"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()