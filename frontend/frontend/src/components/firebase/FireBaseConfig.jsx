import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBkYuAwxgFgewPk7YGnwdO8Nb9TZNZNrHI",
  authDomain: "edsphere-39542.firebaseapp.com",
  projectId: "edsphere-39542",
  storageBucket: "edsphere-39542.appspot.com",
  messagingSenderId: "682142608894",
  appId: "1:682142608894:web:ef95e42611494985dae4af",
  measurementId: "G-ZRMX44VRW3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };