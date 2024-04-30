import React from "react";
import Navbar from "../Navbar";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default GuestLayout;
