import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { account, ID } from '../config/appwrite';

const AuthContext = createContext();
export function useUser() {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      checkUsersStatus();
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signUp = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      await sendVerificationEmail();
      toast.success('Account created');
     
      return signIn()
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };


  const signIn = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      await checkUsersStatus();
      navigate("/")
    } catch (error) {
      console.log("sign-in error", error)
    }
    
    
  };

  const checkUsersStatus = async () => {
     try {
      const userDetails = await account.get();
      // console.log('fetch users details', userDetails);
      setUser(userDetails);
     } catch (error) {
      
     }
  }

  const sendVerificationEmail = async () => {
    try {
      const response = await account.createVerification('https://your-redirect-url.com/verify');
      console.log("Verification email sent:", response);
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      navigate("/");
      toast.success("Signed out successfully.");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
