// Import necessary modules
import { useEffect } from 'react';
import { app, auth } from './FireBase';
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

// Initialize FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);

// Start FirebaseUI on the given element ID
export const startFirebaseUI = (elementId) => {
  ui.start(elementId, uiConfig);
};
