import React from "react";
import Navbar from "../components/Navbar";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default GuestLayout;
