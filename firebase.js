import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ1fiYnlRe7UuE0ND0KAi0Bs_ne2gG4Ok",
  authDomain: "roomchat-e960b.firebaseapp.com",
  projectId: "roomchat-e960b",
  storageBucket: "roomchat-e960b.appspot.com",
  messagingSenderId: "936121179132",
  appId: "1:936121179132:web:58d95efed37eedc98e3079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app