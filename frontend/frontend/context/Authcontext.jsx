// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import account from '../config/appwrite'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const login = async (email, password) => {
    await account.createEmailSession(email, password);
    const currentUser = await account.get();
    setUser(currentUser);
  };

  const register = async (email, password, name) => {
    await account.create('unique()', email, password, name);
    const currentUser = await account.get();
    setUser(currentUser);
  };

  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
