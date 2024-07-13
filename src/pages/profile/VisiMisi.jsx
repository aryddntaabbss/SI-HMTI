import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import GuestLayout from "./../../layouts/GuestLayout";
import HeaderStruktur from "../../components/HeaderStruktur";
import TopLink from "./../../components/TopLink";
import { BASE_API_URL } from "../../constants/apiURL";

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
        <div className="flex justify-center items-center h-screen">
          <p> </p>
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
    </GuestLayout>
  );
};

export default VisiMisi;
