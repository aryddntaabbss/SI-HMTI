import React from "react";

const SectionTitle = ({title}) => {
  return (
    <div className="mb-4 font-bold text-center relative">
      <span
        data-aos="fade-left"
        className="text-3xl md:text-5xl absolute inset-0 flex justify-center items-center text-bad-blue dark:text-white z-10"
      >
        {title}
      </span>
      <h1
        data-aos="fade-right"
        className="text-6xl md:text-8xl italic text-transparent text-border relative z-0"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
