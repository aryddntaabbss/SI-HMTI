import React from "react";
// import Topbar from "../components/Topbar";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* <Topbar /> */}
      <div className="flex-container">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
