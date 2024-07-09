import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardPengurus = ({ id, title, nama, image, className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div
        id={id}
        className={`flex flex-col items-center ${className}`}
        data-aos="fade-up"
      >
        <h2 className="py-3 text-center text-sm md:text-base font-semibold">
          {title}
        </h2>
        <div className="h-[150px] w-[120px] md:h-[300px] md:w-[250px] border-2 border-good-blue dark:border-white rounded-3xl shadow-lg shadow-good-blue/40 dark:shadow-white/30 bg-white dark:bg-bad-blue">
          <img src={image} alt="pengurus" />
        </div>
        <h3 className="py-3 text-center text-sm md:text-base font-medium max-w-[150px] md:max-w-[300px]">
          {nama}
        </h3>
      </div>
    </>
  );
};

export default CardPengurus;
