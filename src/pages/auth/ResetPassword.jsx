import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-dark-blue to-good-blue md:p-44 sm:p-28 p-7">
      <div className="w-80 lg:w-96 md:w-96 p-8 bg-gradient-to-t from-light-blue to-white rounded-md shadow-lg lg:max-w-xl relative">
        <h1 className="text-center font-bold text-dark-blue text-lg w-full pt-3">
          RESET PASSWORD
        </h1>
        <h3 className="text-center text-black w-full p-5">
          Silahkan buat password baru anda!
        </h3>
        <form onSubmit={resetPasswordHandler} method="post">
          <div className="mb-4 mt-5 relative">
            <input
              name="newPassword"
              type="password"
              placeholder="Password Baru"
              className="block w-full pl-4 pr-9 py-2 mt-2 text-dark-blue bg-transparent border-2 border-dark-blue rounded-md focus:border-good-blue focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <RiLockPasswordFill className="absolute inset-y-3 right-0 flex items-center mr-3 text-dark-blue focus:outline-none" />
          </div>
          <div className="mb-4 mt-5 relative">
            <input
              name="newPasswordConfirm"
              type="password"
              placeholder="Konfirmasi Password Baru"
              className="block w-full pl-4 pr-9 py-2 mt-2 text-dark-blue bg-transparent border-2 border-dark-blue rounded-md focus:border-good-blue focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            />
            <RiLockPasswordFill className="absolute inset-y-3 right-0 flex items-center mr-3 text-dark-blue focus:outline-none" />
          </div>
          <div className="mt-2">
            <button
              type="submit"
              onClick={resetPasswordHandler}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-dark-blue rounded-md focus:outline-none focus:bg-good-blue"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
