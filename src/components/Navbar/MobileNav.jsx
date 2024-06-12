import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const MobileNav = ({isOpen}) => {
  return (
    <div className={`${isOpen ? 'fixed z-40 top-14' : 'absolute -top-[100%]'} md:hidden md:static w-full h-[93vh] bg-white dark:bg-dark-blue py-16 transition-all duration-500`}>
      <nav className="flex flex-col justify-between items-center h-full w-full">
        <ul className="flex flex-col gap-10 font-medium text-center">
          <li>
            <Link to={"/"}>Beranda</Link>
          </li>
          <li>
            <Link to={"/profile/biografi"}>Profil</Link>
          </li>
          <li>
            <Link to={""}>Event</Link>
          </li>
          <li>
            <Link to={"/berita"}>Berita</Link>
          </li>
          <li>
            <Link to={"/galery"}>Galeri</Link>
          </li>
          <li>
            <Link to={""}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Kontak Kami</Link>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
    </div>
  );
};

export default MobileNav;
