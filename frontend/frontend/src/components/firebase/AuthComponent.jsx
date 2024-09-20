import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './FireBaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // New state for role
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const db = getFirestore(app);

  const handleEmailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Save user role to Firestore
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, { role }, { merge: true });

        console.log('Signed in user:', user);
        console.log('User role:', role);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const user = result.user;

        // Save user role to Firestore
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, { role }, { merge: true });

        console.log('Signed in user:', user);
        console.log('User role:', role);
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
      });
  };

  return (
    <div className='bg-orange-500 text-blue-700 flex flex-col justify-center py-80 items-center text-center '>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className='p-2 my-5 w-80 rounded-sm'
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className='p-2 my-5 w-80 rounded-sm'
      />

      {/* Dropdown for selecting role */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className='p-2 my-5 w-80 rounded-sm'
      >
        <option value="student">Student</option>
        <option value="lecturer">Lecturer</option>
      </select>

      <button className='flex flex-row text-white ' onClick={handleEmailSignIn}>Sign in with Email</button>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default AuthComponent;
