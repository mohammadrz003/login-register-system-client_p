import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import defaultHttp from "../services/defaultHttpService";

const AuthContext = React.createContext({
  account: {},
  setAccount: () => {},
});

const LOCAL_STORAGE_KEY = process.env.REACT_APP_LOCAL_STORAGE_AUTH_KEY;

export const AuthContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || null
  );

  // get token query from the url
  useEffect(() => {
    (async () => {
      const queryParams = new URLSearchParams(searchParams);
      if (queryParams.has("token")) {
        const token = queryParams.get("token");
        try {
          const { data } = await defaultHttp.get(`/users/authenticate`, {
            headers: {
              Authorization: token,
            },
          });
          const { user } = data;
          if (user) {
            setAccount({ user, token });
          }
          searchParams.delete("token");
          setSearchParams(searchParams);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [searchParams, setSearchParams]);

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
