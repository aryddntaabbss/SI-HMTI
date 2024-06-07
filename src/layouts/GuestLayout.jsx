import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
