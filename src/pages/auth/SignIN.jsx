import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
// import { LOGIN_URL } from "../../routes/apiUrl";

function SignIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const signInHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Masukkan email dan password dengan lengkap 😡");
    } else {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `https://backend-web.htmi-unkhair.my.id/api/login`,
          { 
            email: email, 
            password: password 
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        if (response.status === 200) {
          navigate('/dashboard');
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setMsg(`${error.response.data.errors} 😡`);
        } else {
          console.log("Error:", error);
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-dark-blue to-good-blue md:p-44 sm:p-28 p-7">
      <div className="w-80 lg:w-96 md:w-96 p-8 bg-gradient-to-t from-light-blue to-white rounded-md shadow-lg lg:max-w-xl">
        <div className="flex w-full justify-center">
          <img
            src="/logoHmti.png"
            className="w-24"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <h1 className="text-center font-bold text-dark-blue text-lg w-full pt-3">
          SISTEM INFORMASI
        </h1>
        <h1 className="text-center font-bold text-dark-blue text-lg w-full">
          HMTI UNKHAIR
        </h1>
        <form onSubmit={signInHandler} method="post">
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
          <div className="mb-2 relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="block w-full pl-4 pr-9 py-2 mt-2 text-dark-blue bg-transparent border-2 border-dark-blue rounded-md focus:border-good-blue focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiFillEyeInvisible 
                className="absolute inset-y-3 right-0 flex items-center mr-3 text-dark-blue cursor-pointer"
                onClick={() => setShowPassword(false)} 
              />
            ) : (
              <AiFillEye 
                className="absolute inset-y-3 right-0 flex items-center mr-3 text-dark-blue cursor-pointer"
                onClick={() => setShowPassword(true)} 
              />
            )}
          </div>
          <Link
            to="/email-verification"
            className="text-xs text-dark-blue hover:underline"
          >
            Forgot Password?
          </Link>
          <div className="mt-4 mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-dark-blue rounded-md focus:outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
          <p className="w-full text-center text-red-700 text-sm font-bold">{msg}</p>
        </form>
      </div>
    </div>
  );
}

export default SignIN;
