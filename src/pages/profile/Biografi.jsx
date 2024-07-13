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
              <h2 className="text-5xl font-bold mb-4">{sejarah?.judul}</h2>
              <div
                className="text-2xl text-gray-700 dark:text-white"
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

            {/* // className="w-3/5 h-auto rounded-lg shadow-lg" */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div
            className="flex items-center justify-center order-2 md:order-1"
            data-aos="fade-right"
          >
            <ImageCard
              className="w-3/5 h-auto rounded-lg shadow-lg"
              key={filosofi?.id}
              image={filosofi?.gambar}
            />
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div data-aos="fade-left">
              <h2 className="text-5xl font-bold mb-4">{filosofi?.judul}</h2>
              <div
                className="text-2xl text-gray-700 dark:text-white"
                dangerouslySetInnerHTML={{ __html: filosofi?.konten }}
              />
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Biografi;
