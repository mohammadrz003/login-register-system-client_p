import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

import AuthContext from "../../contexts/auth-context";
import { updateUserProfileInfo } from "../../services/userAuthService";
import Input from "../UI/Input";

const ProfileForm = (props) => {
  const AuthCtx = useContext(AuthContext);
  const [enteredUserProfileData, setEnteredUserProfileData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const { name, email } = props.userProfileData;
    setEnteredUserProfileData({ name, email });
  }, [props.userProfileData]);

  const logoutHandler = () => {
    AuthCtx.setAccount(null);
  };

  const userProfileChangeHandler = (e) => {
    const value = e.target.value;
    setEnteredUserProfileData((prevState) => {
      return { ...prevState, [e.target.name]: value };
    });
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUserProfileInfo(enteredUserProfileData);
      if (!data?.errors) {
        toast.success(data.message);
        const { user, token } = data;
        AuthCtx.setAccount({ user, token });
      } else if (data?.errors) {
        for (let error of data.errors) {
          toast.error(error.msg);
        }
        props.onRandomNumber(Math.random());
      }
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
      props.onRandomNumber(Math.random());
    }
  };

  return (
    <form onSubmit={updateUserHandler}>
      <div className="space-y-4">
        <Input
          name="name"
          label="Name"
          value={enteredUserProfileData.name}
          onChange={userProfileChangeHandler}
        />
        <Input
          name="email"
          label="Email"
          value={enteredUserProfileData.email}
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
