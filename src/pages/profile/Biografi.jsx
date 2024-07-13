import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import GuestLayout from "../../layouts/GuestLayout";
import TopLink from "../../components/TopLink";
import ImageCard from "../../components/Beranda/ImageCard";
import { BASE_API_URL } from "../../constants/apiURL";
import BounceLoading from "../../utils/BounceLoading";

const Biografi = () => {
  const [loadingKonten, setLoadingKonten] = useState(true);
  const [sejarah, setSejarah] = useState({});
  const [filosofi, setFilosofi] = useState({});

  useEffect(() => {
    fetchData();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const fetchData = async () => {
    setLoadingKonten(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/sejarah-filosofi`);
      setSejarah(response.data.sejarah);
      setFilosofi(response.data.filosofi);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingKonten(false);
    }
  };

  if (loadingKonten) {
    return (
      <GuestLayout>
        <div className="w-full">
          <BounceLoading />
        </div>
      </GuestLayout>
    );
  }

  return (
    <GuestLayout>
      <TopLink />
      <div className=" container mx-auto gap-6 p-5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div className="flex items-center justify-center">
            <div data-aos="fade-right">
              <h2 className="text-5xl font-bold mb-4">SEJARAH HMTI</h2>
              <div
                className="text-2xl text-gray-700 dark:text-white text-justify"
                dangerouslySetInnerHTML={{ __html: sejarah?.konten }}
              />
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
          >
            <ImageCard
              className="w-3/5 h-auto rounded-lg shadow-lg"
              key={sejarah?.id}
              image={sejarah?.gambar}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div
            className="flex justify-center order-2 md:order-1 "
            data-aos="fade-right"
          >
            <ImageCard
              className="w-3/5 h-auto rounded-lg shadow-lg "
              key={filosofi?.id}
              image={filosofi?.gambar}
            />
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div data-aos="fade-left">
              <h2 className="text-5xl font-bold mb-4">FILOSOFI LOGO</h2>
              <div
                className="text-2xl text-gray-700 dark:text-white text-justify"
                dangerouslySetInnerHTML={{ __html: filosofi?.konten }}
              />
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-light-blue dark:bg-dark-blue"
      >
        <path
          className="fill-blue-600"
          fillOpacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,74.7C672,32,768,32,864,74.7C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </GuestLayout>
  );
};

export default Biografi;
