import React, { createContext, useContext, useState, useEffect } from 'react';
import { ID } from "node-appwrite";
import { account } from '../config/appwrite';

const AuthContext = createContext();
export function useUser(){

  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if the user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await account.get();
        setUser(response); // Sets user if authenticated
      } catch {
        setUser(null); // No user logged in
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Sign Up function
  const signUp = async (email, password) => {
    try {
      const response = await account.create("unique()", email, password);
      setUser(response);
      return response;
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    }
  };

  // Sign In function
  const signIn = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      setUser(response);
      return response;
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    }
  };

  // Sign Out function
  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);
