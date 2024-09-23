import React, { useState } from 'react';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';
import { app } from '../firebase/FireBaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-up and sign-in
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student'); // Role state
  const [errors, setErrors] = useState({}); // Object to hold various error messages
  const [loading, setLoading] = useState(false); // Loading state

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const db = getFirestore(app);

  const validateEmail = () => {
    if (role === 'lecturer' && !email.endsWith('@lecturer.university.edu')) {
      return 'Please use a valid lecturer university email (@lecturer.university.edu).';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    } else {
      const emailError = validateEmail();
      if (emailError) {
        newErrors.email = emailError;
      }
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    // Confirm Password validation (only for sign-up)
    if (isSignUp) {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password.';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setErrors({});
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { role }, { merge: true });
      console.log('Signed up user:', user);
      console.log('User role:', role);
      // Optionally, redirect the user or reset the form here
    } catch (error) {
      console.error('Error during sign-up:', error);
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) return;

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signed in user:', user);
      // Optionally, redirect the user here
    } catch (error) {
      console.error('Error during sign-in:', error);
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrors({});
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { role }, { merge: true });
      console.log('Signed in with Google:', user);
      // Optionally, redirect the user here
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (error) => {
    let message = 'An unexpected error occurred. Please try again.';
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'This email is already in use.';
          break;
        case 'auth/invalid-email':
          message = 'The email address is invalid.';
          break;
        case 'auth/weak-password':
          message = 'The password is too weak.';
          break;
        case 'auth/user-not-found':
          message = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          message = 'Incorrect password.';
          break;
        case 'auth/popup-closed-by-user':
          message = 'The popup was closed before completing the sign in.';
          break;
        // Add more cases as needed
        default:
          message = error.message;
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, general: message }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        {/* General Form Error */}
        {errors.general && (
          <p className="text-red-600 mb-4 text-center">{errors.general}</p>
        )}

        <form onSubmit={isSignUp ? handleEmailSignUp : handleEmailSignIn}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your university email"
              className={`p-2 w-full border ${
                errors.email ? 'border-red-600' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`p-2 w-full border ${
                errors.password ? 'border-red-600' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input (Sign Up only) */}
          {isSignUp && (
            <div className="mb-4">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={`p-2 w-full border ${
                  errors.confirmPassword ? 'border-red-600' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {/* Role Selection */}
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 rounded-md my-3 hover:bg-blue-700 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading
              ? isSignUp
                ? 'Signing Up...'
                : 'Signing In...'
              : isSignUp
              ? 'Sign Up with Email'
              : 'Sign In with Email'}
          </button>
        </form>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`w-full bg-red-500 text-white py-2 rounded-md my-3 hover:bg-red-600 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading
            ? 'Processing...'
            : isSignUp
            ? 'Sign Up with Google'
            : 'Sign In with Google'}
        </button>

        {/* Toggle Sign Up / Sign In */}
        <div className="text-center mt-4">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsSignUp(false);
                  setErrors({});
                }}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  setIsSignUp(true);
                  setErrors({});
                }}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
