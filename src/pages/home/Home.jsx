import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import AuthenticationOptions from "../../components/home/AuthenticationOptions";
import AuthContext from "../../contexts/auth-context";
import Profile from "../../components/profile/Profile";

const Home = () => {
  const { state } = useLocation();
  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    if (state?.toastMessage) {
      toast[state.toastMessage.type](state.toastMessage.message);
    }
  }, [state?.toastMessage]);

  return <div>{AuthCtx.account ? <Profile /> : <AuthenticationOptions />}</div>;
};

export default Home;
