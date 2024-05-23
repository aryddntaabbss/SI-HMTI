import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_API_URL } from "../../constants/apiURL";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const EmailVerificationHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      setMsg('Masukkan email terlebih dahulu 😡');
    } else {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `${BASE_API_URL}/api/forgot-password`,
          { 
            email: email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        
        if (response.status === 200) {
          navigate("/otp-verification")
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setMsg(error.response.data.message);
        } else {
          console.log('Error:', error);
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-dark-blue to-good-blue md:p-44 sm:p-28 p-7">
      <div className="w-80 lg:w-96 md:w-96 p-8 bg-gradient-to-t from-light-blue to-white rounded-md shadow-lg lg:max-w-xl">
        <h1 className="text-center font-bold text-dark-blue text-lg w-full pt-3">
          EMAIL VERIFICATION
        </h1>
          <div className="mb-4 mt-5 relative">
            <input
              name="email"
              type="email"
              placeholder="Masukkan email anda"
              className="block w-full pl-4 pr-9 py-2 mt-2 text-dark-blue bg-transparent border-2 border-dark-blue rounded-md focus:border-good-blue focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdEmail className="absolute inset-y-3 right-0 flex items-center mr-3 text-dark-blue focus:outline-none"/>
          </div>
          <div className="mt-2">
            <button
              onClick={EmailVerificationHandler}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-dark-blue rounded-md focus:outline-none focus:bg-good-blue"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          <p className="w-full text-center text-red-700 text-sm font-bold pt-5">{msg}</p>
      </div>
    </div>
  );
};

export default EmailVerification;
