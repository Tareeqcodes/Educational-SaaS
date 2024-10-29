import React from 'react'
import { useState } from 'react'
import SignInForm from '../components/Auth/SignInForm'
import SignUpForm from '../components/Auth/SignUpForm'

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className='flex h-screen items-center justify-center text-center'>
         {isSignIn ? (
        <SignInForm onSwitch={() => setIsSignIn(false)} />
      ) : (
        <SignUpForm onSwitch={() => setIsSignIn(true)} />
      )}
    </div>
  )
}

export default Auth