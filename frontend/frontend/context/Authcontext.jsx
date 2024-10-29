import React, { createContext, useContext, useState, useEffect } from 'react';
import { ID } from "node-appwrite";
import { account } from '../config/appwrite';

const AuthContext = createContext();
export function useUser() {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const signUp = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      return await signIn(email, password);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await account.createEmailPasswordSession(email, password);
      setUser(response);
      return response;
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
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
