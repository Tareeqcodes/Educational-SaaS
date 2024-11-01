import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../../context/Authcontext';
import { toast } from 'react-toastify';



const SignInForm = ({onSwitch}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();

  const handleSignIn = async (e)=>{
   e.preventDefault();
   try {
    await signIn(email, password);
    toast.success('Logged in successfully');
    console.log('signIn succefully')
   } catch (error) {
    console.log('error');
   }
}

  return (
    <div className='flex items-center justify-center text-justify'>
    <div className='bg-white text-black shadow-lg rounded-lg p-6 w-full min-w-96 mt-20'>
      <form onSubmit={handleSignIn}>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Login
        </h2>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='border rounded w-full py-2 px-3'
            autoComplete='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='relative mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='password'
            name='password'
            className='border rounded w-full py-2 px-3'
            autoComplete='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
        </div>

        <div className='flex flex-col gap-5'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
          >
            Login
          </button>
          <h3 className='p-2 text-center'>forget password</h3>
          <p>
            Don't have an account?{''}
            <span onClick={onSwitch} className="text-blue-500 cursor-pointer p-3">
                Sign up.
              </span>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignInForm