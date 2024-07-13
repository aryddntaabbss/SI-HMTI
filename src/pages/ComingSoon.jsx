import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuestLayout from "../layouts/GuestLayout";
import LogoHmti from "../assets/img/hmti-logo.png";
import HeaderStruktur from "../components/HeaderStruktur";

const ComingSoon = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <GuestLayout>
      <div className="h-screen flex items-center justify-center bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue relative px-6">
        <div className="text-center" data-aos="fade-in">
          <div className="mb-4" data-aos="zoom-in">
            <img
              src={LogoHmti}
              alt="HMTI LOGO"
              className="mx-auto w-60 rounded-lg my-10"
            />
          </div>
          <h1
            className="text-5xl font-bold mb-2 text-blue-700"
            data-aos="fade-up"
          >
            <HeaderStruktur id="comming soon" title="COMMING SOON" />
          </h1>
          <p className="text-xl font-extrabold mb-4" data-aos="fade-up">
            We are going to launch this Pages Very Soon. Stay Tune.
          </p>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ComingSoon;
