/* eslint-disable no-unused-vars */
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
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: currentUser.email }
          );

          localStorage.setItem("access-token", data.token);

          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/profile`,
            {
              headers: {
                Authorization: `Bearer ${data.token}`,
              },
            }
          );
          setUser(res.data);
        } catch (error) {
          console.error("Error fetching user from DB:", error);
        }
      } else {
        setUser(null);
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("access-token");
    setUser(null);
    Swal.fire("Success", "logged out successfully");
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    register,
    login,
    logout,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
