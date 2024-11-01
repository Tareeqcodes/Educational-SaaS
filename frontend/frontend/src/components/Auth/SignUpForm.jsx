import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/Authcontext';
import { databases } from '../../../config/appwrite';

const ErrorMessages = ({ errors }) => ( 
  <ul className="text-red-500 text-sm">
    {errors.map((error, index) => (
      <li key={index}>{error}</li>
    ))}
  </ul>
);

const SignUpForm = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState('student');
  const [errors, setErrors] = useState([]);
  const { signUp } = useAuth();

  const validateForm = () => {
    const validationErrors = [];
    const emailPattern = /^[a-zA-Z]+[0-9]*@[\gmail]+\.com/;
    // /^[a-zA-Z]+[0-9]*@[\w.-]+\.edu\.ng$/

    if (role === 'lecturer' && !emailPattern.test(email)) {
      validationErrors.push('Please use a valid lecturer email');
    }

    if (password !== confirmPassword) {
      validationErrors.push('Passwords do not match');
    } 

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if(role === 'lecture'){
      const lecturerId = `lecturer_${user.$id}`;

      await account.updatePrefs(user.$id, { role: "lecturer", lecturerId });

      await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_LECTURER_COLLECTION_ID,
        lecturerId,
        { role: "lecturer"},
        [`lecturer_${user.$id}`],
      );
    }

    try {
      await signUp(email, password);
      toast.success('Signup successful');
    } catch (error) {
      console.error(error);
      setErrors([error.message || 'Signup failed']);
    }
  };

  return (
    <div className='flex items-center min-w-96 justify-center'>
      <div className='bg-white shadow-lg rounded-lg p-4 w-full mt-20'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-2xl font-bold text-center text-gray-800 mb-3'>Sign Up</h2>

          {errors.length > 0 && <ErrorMessages errors={errors} />}

          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='border rounded w-full py-2 px-3'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='relative mb-4'>
            <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className='border rounded w-full py-2 px-3'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className='relative mb-6'>
            <label htmlFor='confirm-password' className='block text-gray-700 font-bold mb-2'>Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirm-password'
              placeholder='Confirm Password'
              className='border rounded w-full py-2 px-3'
              autoComplete='new-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-11 cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          <div className='flex flex-col gap-5'>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Sign Up</button>
            <p>
              Already have an account?{' '}
              <span onClick={onSwitch} className="text-blue-500 cursor-pointer">Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
