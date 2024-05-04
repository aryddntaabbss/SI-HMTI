import React from "react";
import { MdOutlineVerified } from "react-icons/md";

const OtpVerification = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-dark-blue to-good-blue md:p-44 sm:p-28 p-7">
      <div className="w-80 lg:w-96 md:w-96 p-8 bg-gradient-to-t from-light-blue to-white rounded-md shadow-lg lg:max-w-xl">
        <h1 className="text-center font-bold text-green-700 text-lg w-full pt-3">
          EMAIL TERDAFTAR
        </h1>
        <MdOutlineVerified className="w-full mt-5 text-green-700" size='100px'/>
        <h3 className="text-center font-semibold text-black w-full p-5">
            Silahkan klik link yang telah terkirim ke email anda untuk melanjutkan!
        </h3>
      </div>
    </div>
  );
};

export default OtpVerification;
