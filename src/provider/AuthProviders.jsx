import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = useMemo(() => ({ user }), [user]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
