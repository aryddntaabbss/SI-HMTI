import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import "../index.css";
import ScrollToTopButton from "../components/ScrollToTop";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default GuestLayout;
