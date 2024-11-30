import React, { useState, useEffect } from "react";
import LOGO from "../assets/img/hmti-logo.png";

const Offline = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup listeners saat komponen di-unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 w-full sm:w-1/2 md:w-1/3">
          <img
            src={LOGO}
            alt="Logo"
            className="mb-6 mx-auto h-20 w-20 object-contain"
          />
          <h1 className="text-4xl font-bold ">You are Offline</h1>
          <p className="text-xl">Try to reconnect to the internet.</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Offline;
