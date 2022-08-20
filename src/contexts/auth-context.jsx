import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  account: {},
  setAccount: () => {},
});

const LOCAL_STORAGE_KEY = process.env.REACT_APP_LOCAL_STORAGE_AUTH_KEY;

export const AuthContextProvider = ({ children }) => {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null
  );

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null;

    setAccount(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(account);
    localStorage.setItem(LOCAL_STORAGE_KEY, data);
  }, [account]);

  return (
    <AuthContext.Provider value={{ account, setAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
