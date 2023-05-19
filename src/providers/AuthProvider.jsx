import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (displayName, photoURL) => {
    setLoading(true);
    // console.log(auth.currentUser, displayName, photoURL);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const googlePopUpSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   const githubPopUpSignIn = () => {
  //     setLoading(true);
  //     return signInWithPopup(auth, githubProvider);
  //   };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      // console.log("logged in user inside auth state observer", loggedInUser);
      setUser(loggedInUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authinfo = {
    user,
    loading,
    setLoading,
    theme,
    setTheme,
    createUser,
    login,
    updateUser,
    googlePopUpSignIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
