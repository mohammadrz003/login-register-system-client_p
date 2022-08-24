import React, { useEffect, useContext } from "react";
import { useState } from "react";

import AuthContext from "../../contexts/auth-context";
import {
  getUserProfile,
  updateUserProfilePhoto,
} from "../../services/userAuthService";
import ProfileForm from "./ProfileForm";
import defaultUserPicture from "../../assets/user.png";
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";
import toast from "react-hot-toast";

function validURL(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const SERVER_END_POINT = process.env.REACT_APP_SERVER_END_POINT;

const ProfileCard = () => {
  const AuthCtx = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const [error, setError] = useState(null);
  const [userProfileData, setUserProfileData] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    (async () => {
      if (AuthCtx.account) {
        const { data } = await getUserProfile();
        const { name, email, avatar } = data.user;
        setUserProfileData({ name, email, avatar });
      }
    })();
  }, [AuthCtx.account, randomNumber]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUserProfile();
        const { avatar } = data.user;
        setUserProfileData((prevState) => {
          return { ...prevState, avatar };
        });
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data.message) {
          setError({
            message: error.response.data.message,
            setRandomNumber: Math.random(),
          });
        }
      }
    })();
  }, [file, randomNumber]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const changeUserPhotoHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("avatar", file);
    try {
      const response = await updateUserProfilePhoto(data);
      toast.success(response.data.message);
      setRandomNumber(Math.random());
      setFile(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col w-full max-w-lg">
      <h2 className="font-semibold text-xl lg:text-2xl">Your Profile</h2>
      <form onSubmit={changeUserPhotoHandler}>
        <div className="flex items-center space-x-4 mt-4">
          <div className="shadow-md rounded-full p-2 bg-white overflow-hidden">
            {file ? (
              <img
                className="w-32 h-32 rounded-full"
                src={URL.createObjectURL(file)}
                alt="preview_profile"
              />
            ) : (
              <img
                className="w-32 h-32 w-full h-auto rounded-full object-cover"
                src={
                  userProfileData.avatar
                    ? validURL(userProfileData.avatar)
                      ? userProfileData.avatar
                      : `${SERVER_END_POINT}/uploads/${userProfileData.avatar}`
                    : defaultUserPicture
                }
                alt="profile_picture"
              />
            )}
          </div>
          <div className="flex flex-col space-y-3">
            <label
              className="rounded-md px-4 py-2 text-sm font-medium text-white bg-palette-luckyPoint"
              htmlFor="fileInput"
            >
              Change photo
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file ? (
              <div className="btn-group">
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="btn dark:bg-red-600 hover:dark:bg-red-700"
                >
                  <IoMdClose className="dark:text-white text-xl" />
                </button>
                <button
                  type="submit"
                  className="btn dark:bg-green-600 hover:dark:bg-green-700"
                >
                  <IoSendOutline className="dark:text-white text-xl" />
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="flex space-x-2 items-center rounded-md px-4 py-2 text-sm font-medium border border-palette-luckyPoint text-palette-luckyPoint"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 dark:text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span>Remove</span>
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="mt-6">
        <ProfileForm
          userProfileData={userProfileData}
          onRandomNumber={setRandomNumber}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
