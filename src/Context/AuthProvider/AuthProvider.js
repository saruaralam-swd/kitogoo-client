import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const profileUpdate = (profile) => {
    setLoading(false);
    return updateProfile(auth.currentUser, profile)
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      setLoading(false);
      console.log('Observer set this user', currentUser);
    })

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    providerLogin,
    profileUpdate,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;