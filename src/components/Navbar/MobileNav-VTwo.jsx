import DarkModeToggle from "./DarkModeToggle";
import NavList from "./NavList-VTwo";

const MobileTest = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen
          ? "fixed z-[9999] bottom-0 left-1/2 transform -translate-x-1/2"
          : "absolute -bottom-[150%]"
      } md:hidden lg:w-full w-11/12 lg:h-full h-16 bg-white dark:bg-dark-blue rounded-3xl shadow-lg py-1 px-2 transition-all duration-500 flex justify-center items-center mb-3 lg:mb-0`}
    >
      <nav className="flex justify-center items-center h-full w-full">
        <div className="flex justify-around w-full">
          <NavList />
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default MobileTest;
