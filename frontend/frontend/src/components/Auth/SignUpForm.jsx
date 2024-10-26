import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpForm = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
        <form>
          <h2 className='text-2xl font-bold text-center text-gray-800 mb-3'>
            Sign Up
          </h2>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border rounded w-full py-2 px-3'
              autoComplete='email'
              required
            />
          </div>

          <div className='relative mb-4'>
            <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              className='border rounded w-full py-2 px-3'
              autoComplete='current-password'
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className='relative mb-6'>
            <label htmlFor='confirm-password' className='block text-gray-700 font-bold mb-2'>
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirm-password'
              name='confirm-password'
              className='border rounded w-full py-2 px-3'
              autoComplete='new-password'
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-12 cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="mb-4">
            <select className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          <div className='flex flex-col gap-5'>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>
              Sign Up
            </button>
            <p>
              Already have an account?{' '}
              <span onClick={onSwitch} className="text-blue-500 cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
