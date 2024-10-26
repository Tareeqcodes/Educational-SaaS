import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const SignInForm = ({onSwitch}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex items-center justify-center'>
    <div className='bg-white text-black shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
      <form>
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