// import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { app } from './FireBaseConfig';

// const CustomAuth = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();

//   const handleEmailSignIn = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleEmailSignIn}>Sign in with Email</button>
//       <button onClick={handleGoogleSignIn}>Sign in with Google</button>
//     </div>
//   );
// };

// export default CustomAuth;
