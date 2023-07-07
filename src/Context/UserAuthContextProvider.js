"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { storage } from "../firebase";
import { db } from "../firebase";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
 
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const userAuthContext = createContext();

// component start
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [plan, setPlan] = useState("");
  const [planData, setPlanData] = useState([]);
  const [photo, setPhoto] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [currenUserData,setCurrentUserData] = useState([])

  function LogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function SignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function LogOut() {
    return signOut(auth);
  }
  function googleSignInRedirect() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithRedirect(auth, googleAuthProvider);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  // let currentuser= JSON.parse(localStorage.getItem("user")) || null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
      localStorage.setItem("user", JSON.stringify(currentuser));
    });

    return () => {
      unsubscribe();
    };
  }, []);



  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  return (
    <userAuthContext.Provider
      value={{
        user,
        LogIn,
        SignUp,
        googleSignInRedirect,
        LogOut,
        plan,
        setPlan,
        googleSignIn,
        photo,
        setPhoto,
        loading,
        setLoading,
        imgUrl,
        setImgUrl,
        getImageURL,
        currenUserData,
        setCurrentUserData,
        planData,
        setPlanData
        // getUserById
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function UseUserAuth() {
  return useContext(userAuthContext);
}
