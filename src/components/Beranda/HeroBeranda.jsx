import React from "react";
import { Link } from "react-router-dom";
import LogoHmti from "../../assets/img/hmti-logo.png";
import BackHero from "../../assets/img/backhero.gif";

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
        className="w-full lg:w-1/2 py-16 lg:pr-40 lg:pb-24 flex justify-center items-center relative"
      >
        <div className="relative w-full h-auto flex justify-center items-center">
          {/* Background Image */}
          <img
            src={BackHero}
            alt="Back Hero"
            className="absolute w-4/5 lg:w-5/6 min-h-full object-cover object-center z-0"
          />

          {/* Logo Image */}
          <img
            src={LogoHmti}
            alt="Logo HMTI"
            className="w-2/3 lg:w-4/4 max-w-lg z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBeranda;
