import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simulate API call
    if (email && password) {
      setIsAuthenticated(true);
      setUser({ name: 'Admin User', email, role: 'admin' });
      return true;
    }
    return false;
  };

  const signup = async (name, email, password) => {
    // Simulate API call
    if (name && email && password) {
      setIsAuthenticated(true);
      setUser({ name, email, role: 'admin' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}