import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const TopLink = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState();

  const getPathname = () => {
    const path = location.pathname.split("/");
    setPathname(path[2]);
  };

  useEffect(() => {
    getPathname();
  });

  return (
    <div className="flex justify-center items-center py-5">
      <div className="inline-flex">
        <div className="flex justify-around">
          <NavLink
            to="/profile/biografi"
            exact="true"
            className={`px-4 text-center py-2 text-sm font-medium ${pathname === 'biografi' ? 'text-dark-blue dark:text-white' : 'text-dark-blue/50 dark:text-white/50'} hover:text-dark-blue dark:hover:text-white transition-all`}
          >
            Biografi
            <hr className={`w-20 ${pathname === 'biografi' ? 'border-dark-blue dark:border-white' : 'border-dark-blue/50 dark:border-white/50'} sm:mx-auto lg:my-2`} />
          </NavLink>
          <NavLink
            to="/profile/visi-misi"
            className={`px-4 text-center py-2 text-sm font-medium ${pathname === 'visi-misi' ? 'text-dark-blue dark:text-white' : 'text-dark-blue/50 dark:text-white/50'} hover:text-dark-blue dark:hover:text-white transition-all`}
          >
            Visi & Misi
            <hr className={`w-20 ${pathname === 'visi-misi' ? 'border-dark-blue dark:border-white' : 'border-dark-blue/50 dark:border-white/50'} sm:mx-auto lg:my-2`} />
          </NavLink>
          <NavLink
            to="/profile/struktur"
            className={`px-4 text-center py-2 text-sm font-medium ${pathname === 'struktur' ? 'text-dark-blue dark:text-white' : 'text-dark-blue/50 dark:text-white/50'} hover:text-dark-blue dark:hover:text-white transition-all`}
          >
            Struktur
            <hr className={`w-20 ${pathname === 'struktur' ? 'border-dark-blue dark:border-white' : 'border-dark-blue/50 dark:border-white/50'} sm:mx-auto lg:my-2`} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopLink;
