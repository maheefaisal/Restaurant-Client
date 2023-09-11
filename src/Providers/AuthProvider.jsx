import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //LogIn
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Logout
  const logOut = () => {
    return signOut(auth);
  };
  // Google Sign In
  const googleSignIn = () => {

    return signInWithPopup(auth, googleProvider)
  }

  const profile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
          .then(data => {
            console.log(data)
            localStorage.setItem('access-token', data.data.token)
          })


      }

      else {
        localStorage.removeItem('access-token')

      }
    });
    return () => {
      return unsubscribe();
    };
  });

  // Auth Info
  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    profile,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
