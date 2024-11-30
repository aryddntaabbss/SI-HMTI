import DarkModeToggle from "./DarkModeToggle";
import NavList from "./NavList";

const MobileNav = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "fixed z-40 top-10" : "absolute -top-[150%]"
      } md:hidden md:static w-full h-[93vh] bg-white dark:bg-dark-blue py-16 transition-all duration-500`}
    >
      <nav className="flex flex-col justify-between items-center h-full w-full">
        <ul className="flex flex-col gap-10 font-medium text-center">
          <NavList />
        </ul>
        <DarkModeToggle />
      </nav>
    </div>
  );
};

export default MobileNav;
