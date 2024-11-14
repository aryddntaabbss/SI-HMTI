import React from "react";

const HeaderStruktur = ({ id, title }) => {
  return (
    <div id={id} className="mb-4 font-bold text-center relative">
      <span
        className="text-2xl md:text-5xl absolute inset-0 flex justify-center items-center text-dark-blue dark:text-white z-10"
        data-aos="fade-left"
      >
        {title}
      </span>
      <h1
        className="text-4xl md:text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
        data-aos="fade-right"
        // data-text="Misi"
      >
        {title}
      </h1>
    </div>
  );
};

export default HeaderStruktur;
