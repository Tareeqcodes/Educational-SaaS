
import { auth } from './FireBase';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';

// FirebaseUI configuration
const uiConfig = {
  signInSuccessUrl: '/', // Redirect to this URL after successful sign-in
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // Add more providers if needed
  ],
};

// Initialize the FirebaseUI widget using Firebase
const ui = new firebaseui.auth.AuthUI(auth);

export const startFirebaseUI = (elementId) => {
  ui.start(elementId, uiConfig);
};
