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
      className="py-1.5 px-3 rounded-md bg-good-blue dark:bg-white text-xl text-white dark:text-dark-blue">
        {isDark ? <GrSun /> : <PiMoonFill />}
      </button>
    </>
  );
};

export default DarkModeToggle;
