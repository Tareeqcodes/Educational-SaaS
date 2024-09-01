// import React, { useEffect } from 'react';
// import { auth } from './FireBaseConfig';
// import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
// import * as firebaseui from 'firebaseui';
// import 'firebaseui/dist/firebaseui.css'; // Import the FirebaseUI CSS

// const AuthUI = () => {
//   useEffect(() => {
//     // FirebaseUI configuration
//     const uiConfig = {
//       signInSuccessUrl: '/', // Redirect to this URL after successful sign-in
//       signInOptions: [
//         firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID, // Anonymous provider
//         firebaseui.auth.EmailAuthProvider.PROVIDER_ID, // Email/password provider
//         firebaseui.auth.GoogleAuthProvider.PROVIDER_ID, // Google provider
//         // Add more providers if needed
//       ],
//     };

//     // Initialize FirebaseUI
//     const ui = new firebaseui.auth.AuthUI(auth);

//     // Start FirebaseUI on the element with id 'firebaseui-auth-container'
//     ui.start('#firebaseui-auth-container', uiConfig);

//     // Clean up the UI when the component is unmounted
//     return () => ui.delete();
//   }, []);

//   return <div id="firebaseui-auth-container"></div>;
// };

// export default AuthUI;
