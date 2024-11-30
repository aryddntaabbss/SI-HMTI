import { useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";
import { PiMoonFill } from "react-icons/pi";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  function setDark() {
    // Add or Remove Mode to HTML tag
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    setIsDark(true);
  }

  function setLight() {
    // Add or Remove Mode to HTML tag
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDark(false);
  }

  function toggleMode() {
    if (isDark) {
      setLight();
    } else {
      setDark();
    }
  }

  // When the page is loaded or refreshed, check for theme preference
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  return (
    <>
      <button
        onClick={toggleMode}
        className="py-1.5 lg:px-3 lg:rounded-md lg:text-xl text-2xl dark:text-white text-dark-blue lg:text-white lg:dark:text-dark-blue hover:text-blue-500  lg:bg-good-blue lg:dark:bg-white"
      >
        {isDark ? <GrSun /> : <PiMoonFill />}
      </button>
    </>
  );
};

export default DarkModeToggle;
