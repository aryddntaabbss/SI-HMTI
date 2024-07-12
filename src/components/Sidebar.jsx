import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  Cog6ToothIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import CompanyLogo from "../assets/img/hmti-logo.png";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useLocation();
  return (
    <div
      ref={ref}
      className="fixed w-56 h-full bg-white shadow-lg border-r-2 border-gray-200"
    >
      {/* Sidebar Logo */}
      <div className="flex justify-center mt-6 mb-14">
        <img src={CompanyLogo} className="w-16 h-auto" alt="company logo" />
      </div>
      {/* Sidebar Menu */}
      <div className="flex flex-col">
        <Link to="/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${
                      router.pathname === "/dashboard"
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
                    }`}
          >
            <div className="mr-2">
              <HomeIcon className="w-5 h-5" />
            </div>
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/tabel">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${
                      router.pathname === "/tabel"
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
                    }`}
          >
            <div className="mr-2">
              <TableCellsIcon className="w-5 h-5" />
            </div>
            <p>Tabel</p>
          </div>
        </Link>
        <Link to="/#">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
                    ${
                      router.pathname === "/#"
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
                    }`}
          >
            <div className="mr-2">
              <Cog6ToothIcon className="w-5 h-5" />
            </div>
            <p>Setting</p>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
