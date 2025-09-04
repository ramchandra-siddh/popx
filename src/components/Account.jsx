import React, { useState } from "react";

const Account = () => {
  const [avatar, setAvatar] = useState("abcxyz.jpg");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file)); // Preview selected image
    }
  };

  return (
    <div>
      <div className="text-left space-y-4">
        <div className="bg-white ">
          <h2 className="text-xl font-bold">Account Settings</h2>
        </div>
        <div className="flex items-center gap-4 ">
          {/* Avatar with file picker */}
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full h-[40px] w-[40px] object-cover"
            />
            {/* File input (hidden) */}
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-0 right-0 bg-violet-600 text-white p-1 rounded-full cursor-pointer hover:bg-violet-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h4l2-3h6l2 3h4v13H3V7zm9 4a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>

              <input
                id="avatarUpload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div>
            <h3 className="font-semibold">Abc Xyz</h3>
            <p className="text-sm text-gray-500">abcxyz@gmail.com</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam.
        </p>
      </div>
    </div>
  );
};

export default Account;
