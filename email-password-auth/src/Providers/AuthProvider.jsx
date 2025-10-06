import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/firebase.init'; // 👈 your firebase init file path

// 1️⃣ Create Context
export const AuthContext = createContext(null);

// 2️⃣ Get Firebase Auth instance
const auth = getAuth(app);

// 3️⃣ Create Provider Component
const AuthProvider = ({ children }) => {

  // function to create a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // object with all auth functions
  const authInfo = {
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
