import React from "react";

const Account = () => {
  return (
    <div>
      <div className="text-left space-y-4">
        <h2 className="text-xl font-bold">Account Settings</h2>
        <div className="flex items-center gap-4">
          <img
            src="abcxyz.jpg"
            alt="avatar"
            className="rounded-full h-[40px] w-[40px]"
          />
          <div>
            <h3 className="font-semibold">Abc Xyz</h3>
            <p className="text-sm text-gray-500">abcxyz@gmail.com</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Account;
