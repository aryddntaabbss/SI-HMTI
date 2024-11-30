import React, { useState, useEffect } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { TiArrowUp } from "react-icons/ti";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when user scrolls down 400px
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div className="z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bg-dark-blue dark:bg-white text-white dark:text-dark-blue p-1 rounded-full bottom-24 md:bottom-5 right-5 md:right-10 animate-slideup transition-all`}
        >
          <HiArrowSmUp size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
