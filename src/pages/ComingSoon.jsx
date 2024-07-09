import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuestLayout from "../layouts/GuestLayout";

const ComingSoon = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <GuestLayout>
      <div className="h-screen flex items-center justify-center relative">
        <div className="text-center" data-aos="fade-in">
          <div className="mb-4" data-aos="zoom-in">
            <img
              src={`${process.env.PUBLIC_URL}/logoHmti.png`}
              alt="HMTI LOGO"
              className="mx-auto w-60 rounded-lg my-10"
            />
          </div>
          <h1
            className="text-5xl font-bold mb-2 text-blue-700"
            data-aos="fade-up"
          >
            Comming Soon
          </h1>
          <p className="text-xl mb-4" data-aos="fade-up">
            We are going to launch this Pages Very Soon. Stay Tune.
          </p>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ComingSoon;
