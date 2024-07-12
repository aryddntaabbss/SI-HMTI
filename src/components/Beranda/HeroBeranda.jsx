import React from "react";
import { Link } from "react-router-dom";

const HeroBeranda = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full lg:min-h-screen bg-gradient-to-b from-white to-light-blue dark:from-dark-blue dark:to-bad-blue overflow-hidden">
      <div className="w-full lg:w-1/2 px-6 py-5 lg:py-16 lg:pl-40 flex justify-center items-center">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-5 w-auto h-auto"
        >
          <h1 className="font-bold text-4xl lg:text-5xl">HMTI UNKHAIR</h1>
          <h3 className="text-3xl">
            Satu Wadah Berkembang Bersama, Berbagi, Mengolah Digitalisasi
          </h3>
          <h3 className="font-bold text-3xl">#HMTITetapSatu</h3>
          <div className="flex gap-3 pt-3">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={"profile/biografi"}
              className="border-2 border-good-blue text-good-blue px-4 py-2 rounded-md font-bold hover:bg-good-blue hover:scale-105 hover:text-light-blue transition-all"
            >
              Biografi HMTI
            </Link>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={"profile/struktur"}
              className="bg-good-blue px-4 border-2 border-transparent text-light-blue py-2 rounded-md font-bold hover:bg-transparent hover:scale-105 hover:border-good-blue hover:text-good-blue transition-all"
            >
              Organisasi
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="w-full lg:w-1/2 py-16 lg:pr-40 lg:pb-24 flex justify-center items-center"
      >
        <div className="relative w-full h-auto flex justify-center items-center">
          <span className="absolute -top-5 lg:-top-10 -translate-x-1/">
            <svg
              className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] opacity-60 rotate-180 "
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#126BF1"
                d="M28.9,20.1C19,33.8,-20.1,34,-29.8,20.4C-39.5,6.9,-19.8,-20.5,-0.2,-20.6C19.4,-20.7,38.8,6.4,28.9,20.1Z"
                transform="translate(100 100) scale(2.3)"
              />
            </svg>
          </span>
          <span className="absolute -top-5 lg:-top-10 -translate-x-1/">
            <svg
              className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rotate-45 opacity-60"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#126BF1"
                d="M35.9,23.8C23.5,42.2,-25.5,42.6,-37.5,24.3C-49.6,6.1,-24.8,-30.8,-0.3,-31C24.1,-31.2,48.3,5.3,35.9,23.8Z"
                transform="translate(100 100) scale(1.7)"
              />
            </svg>
          </span>
          <img
            src="/logoHmti.png"
            alt="Logo HMTI"
            className="w-2/4 -z-0 lg:w-4/5 max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBeranda;
