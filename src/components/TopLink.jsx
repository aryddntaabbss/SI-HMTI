import React from "react";
import { NavLink } from "react-router-dom";

const TopLink = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="inline-flex">
        <div className="flex justify-around">
          <NavLink
            to="/profile"
            exact
            className="px-4 text-center py-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white"
            activeClassName="text-black"
          >
            Biografi
            <hr className="w-20 border-gray-300 sm:mx-auto lg:my-2" />
          </NavLink>
          <NavLink
            to="/profiles"
            className="px-4 text-center py-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white"
            activeClassName="text-black"
          >
            Visi & Misi
            <hr className="w-20 border-gray-300 sm:mx-auto lg:my-2" />
          </NavLink>
          <NavLink
            to="/struktur"
            className="px-4 text-center py-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white"
            activeClassName="text-black"
          >
            Struktur
            <hr className="w-20 border-gray-300 sm:mx-auto lg:my-2" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopLink;
