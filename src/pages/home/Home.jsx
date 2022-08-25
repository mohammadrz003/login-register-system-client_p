import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import AuthenticationOptions from "../../components/home/AuthenticationOptions";
import AuthContext from "../../contexts/auth-context";
import Profile from "../../components/profile/Profile";
import Layout from "../../components/layouts/Layout";

const Home = () => {
  const { state } = useLocation();
  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    if (state?.toastMessage) {
      toast[state.toastMessage.type](state.toastMessage.message);
    }
  }, [state?.toastMessage]);

  return (
    <Layout>
      <div>{AuthCtx.account ? <Profile /> : <AuthenticationOptions />}</div>
    </Layout>
  );
};

export default Home;
