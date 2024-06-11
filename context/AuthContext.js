import React, { Children, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return <AuthProvider value="Test value">{children}</AuthProvider>;
};
