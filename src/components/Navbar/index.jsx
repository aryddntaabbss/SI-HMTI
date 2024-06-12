import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogoHmti from "../../assets/img/hmti-logo.png";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex ${
          isOpen && "fixed z-50"
        } md:static justify-between items-center w-full py-3 px-10 md:px-28 bg-white dark:bg-dark-blue transition-all md:transition-none duration-500`}
      >
        <div className="flex gap-20 items-center w-full">
          <img src={LogoHmti} alt="HMTI" className="w-10 md:w-14" />
          <nav className="hidden md:flex justify-between items-center w-full">
            <ul className="flex gap-10 font-medium">
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
        <button
          className="md:hidden font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          MENU
        </button>
      </div>
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Navbar;
