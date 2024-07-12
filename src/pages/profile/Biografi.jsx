import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuestLayout from "../../layouts/GuestLayout";
import TopLink from "./../../components/TopLink";

const Biografi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <GuestLayout>
      <TopLink />
      <div className="container mx-auto px-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div className="flex items-center justify-center">
            <div data-aos="fade-right">
              <h2 className="text-5xl font-bold mb-4">Sejarah HMTI</h2>
              <p className="text-2xl text-gray-700 dark:text-white">
                Hunt bunch vessel advice big not apart notebook sympathetic
                whether milk split left loyal page wander secrecy winter explore
                jaw pot oar adventure rescue pastry he examine tough view relate
                virtue often inform repetition article secret companion dollar
                steep sauce smell aunt wash.
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/berita-hero.jpg`}
              alt="Biografi"
              className="w-3/5 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div
            className="flex items-center justify-center order-2 md:order-1"
            data-aos="fade-right"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/berita-hero.jpg`}
              alt="Biografi"
              className="w-3/5 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div data-aos="fade-left">
              <h2 className="text-5xl font-bold mb-4">
                Desain & Filosofi Logo
              </h2>
              <p className="text-2xl text-gray-700 dark:text-white">
                Loyal page wander secrecy winter explore jaw pot oar adventure
                rescue pastry he examine tough view relate virtue often inform
                repetition article.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Biografi;
