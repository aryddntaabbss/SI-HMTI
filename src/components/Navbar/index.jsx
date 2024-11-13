import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogoHmti from "../../assets/img/hmti-logo.png";
import MobileTest from "./MobileNav-VTwo";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Navbar untuk desktop saja */}
      <div className="hidden md:flex justify-between items-center w-full py-3 px-10 lg:px-28 bg-white dark:bg-dark-blue transition-all duration-500">
        <div className="flex lg:gap-20 gap-0 items-center w-full">
          <Link to={"/"}>
            <img src={LogoHmti} alt="HMTI" className="w-10 md:hidden" />
          </Link>
          <nav className="flex justify-between items-center w-full">
            <ul className="flex gap-10 font-medium">
              <NavList />
            </ul>
            <DarkModeToggle />
          </nav>
        </div>
      </div>
      {/* MobileTest untuk tampilan mobile saja */}
      <div className="md:hidden">
        <MobileTest isOpen={true} />
      </div>
    </header>
  );
};

export default Navbar;
