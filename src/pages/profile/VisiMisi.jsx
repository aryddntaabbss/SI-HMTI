import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import GuestLayout from "./../../layouts/GuestLayout";
import HeaderStruktur from "../../components/HeaderStruktur";
import TopLink from "./../../components/TopLink";
import { BASE_API_URL } from "../../constants/apiURL";
import BounceLoading from "../../utils/BounceLoading";

const VisiMisi = () => {
  const [loadingKonten, setLoadingKonten] = useState(true);
  const [visi, setVisi] = useState({});
  const [misi, setMisi] = useState({});
  const [tujuan, setTujuan] = useState({});

  useEffect(() => {
    fetchData();
    AOS.init({
      duration: 1000,
    });
  }, []);

  const fetchData = async () => {
    setLoadingKonten(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/visi-misi-tujuan`);
      setVisi(response.data.visi);
      setMisi(response.data.misi);
      setTujuan(response.data.tujuan);
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
      <div className="container mx-auto py-10 px-4 relative overflow-hidden">
        <div className="mb-10 relative">
          <HeaderStruktur id="visi" title="VISI" alt={visi.judul} />
          <p
            className="text-2xl lg:px-96 text-gray-700 dark:text-white text-center"
            dangerouslySetInnerHTML={{ __html: visi?.konten }}
          ></p>
        </div>
        <div className="mb-10 p-5">
          <HeaderStruktur id="misi" title="MISI" alt={misi.judul} />
          <p
            className="text-2xl lg:px-96 text-gray-700 dark:text-white text-center"
            dangerouslySetInnerHTML={{ __html: misi?.konten }}
          ></p>
        </div>

        <div className="mb-10">
          <HeaderStruktur id="tujuan" title="TUJUAN" alt={tujuan.judul} />
          <p
            className="text-2xl lg:px-96 text-gray-700 dark:text-white text-center"
            dangerouslySetInnerHTML={{ __html: tujuan?.konten }}
          ></p>
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

export default VisiMisi;
