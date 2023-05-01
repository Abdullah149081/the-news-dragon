import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserData = (newUser, name, photo) => {
    return updateProfile(newUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const validationEmail = (newUser) => {
    return sendEmailVerification(newUser);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => connection();
  }, []);

  const authInfo = useMemo(() => ({ user, createUser, loading, signIn, logOut, updateUserData, validationEmail }), [loading, user]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
