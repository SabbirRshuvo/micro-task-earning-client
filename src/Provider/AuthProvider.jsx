/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, name, photoURL, role) => {
    setLoading(true);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, {
      displayName: name,
      photoURL: photoURL,
    });
    await syncUserWithDatabase({
      displayName: name,
      email: email,
      photoURL: photoURL,
      role: role,
    });
    return res.user;
  };

  const signIn = async (email, password) => {
    setLoading(true);
    const res = await signInWithEmailAndPassword(auth, email, password);
    await syncUserWithDatabase(res.user);
    return res;
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    await signOut(auth);
  };

  const syncUserWithDatabase = async (user) => {
    if (!user?.email || !user?.displayName) return;
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: user.role || "buyer", // default role if missing
        },
        { withCredentials: true }
      );

      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: user.email },
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Error syncing user with DB:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    signIn,
    logOut,
    syncUserWithDatabase,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
