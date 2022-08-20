import React from "react";

import ProfileForm from "./ProfileForm";

const ProfileCard = () => {
  return (
    <div className="flex flex-col w-full max-w-lg">
      <h2 className="font-semibold text-xl lg:text-2xl">Your Profile</h2>
      <div className="flex items-center space-x-4 mt-4">
        <div className="w-32 shadow-md rounded-full p-2 bg-white">
          <img
            className="w-full h-auto rounded-full object-cover"
            src="https://placeimg.com/192/192/people"
            alt="profile_picture"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <button className="rounded-md px-4 py-2 text-sm font-medium text-white bg-palette-luckyPoint">
            Change picture
          </button>
          <button className="rounded-md px-4 py-2 text-sm font-medium text-palette-luckyPoint border border-palette-luckyPoint">
            Delete picture
          </button>
        </div>
      </div>
      <div className="mt-6">
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfileCard;
