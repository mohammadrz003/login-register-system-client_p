import React, { useState, useEffect, useContext } from "react";

import AuthContext from "../../contexts/auth-context";
import { getUserProfile } from "../../services/userAuthService";
import Input from "../UI/Input";

const ProfileForm = () => {
  const AuthCtx = useContext(AuthContext);
  const [userProfileData, setUserProfileData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    (async () => {
      if (AuthCtx.account) {
        const { data } = await getUserProfile();
        const { name, email } = data.user;
        setUserProfileData({ name, email });
      }
    })();
  }, [AuthCtx.account]);

  const logoutHandler = () => {
    AuthCtx.setAccount(null);
  };

  const userProfileChangeHandler = (e) => {
    const value = e.target.value;
    setUserProfileData((prevState) => {
      return { ...prevState, [e.target.name]: value };
    });
  };

  return (
    <form>
      <div className="space-y-4">
        <Input
          name="name"
          label="Name"
          value={userProfileData.name}
          onChange={userProfileChangeHandler}
        />
        <Input
          name="email"
          label="Email"
          value={userProfileData.email}
          onChange={userProfileChangeHandler}
        />
        <div className="pt-1 space-y-4">
          <button
            className="font-medium w-full bg-palette-luckyPoint rounded-md text-white px-6 py-3"
            type="submit"
          >
            Update profile
          </button>
          <button
            onClick={logoutHandler}
            className="font-medium w-full border border-palette-mediumRedViolet rounded-md text-palette-mediumRedViolet px-6 py-3"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
