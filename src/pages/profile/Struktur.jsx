import { useEffect, useState } from "react";
import BidangPengurus from "../../components/BidangPengurus";
import CardPengurus from "../../components/CardPengurus";
import HeaderStruktur from "../../components/HeaderStruktur";
import SidebarPengurus from "../../components/SidebarPengurus";
import GuestLayout from "../../layouts/GuestLayout";
import TopLink from "./../../components/TopLink";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";
import { BASE_API_KEY } from "../../constants/apiURL";
import { stringDash, stringTanpaKurung } from "../../libs/string-libs";
import BounceLoading from "../../utils/BounceLoading";

const Struktur = () => {
  const [pengurus, setPengurus] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPengurus = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/struktur`, {
        headers: {
          "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      setPengurus(response.data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchPengurus();
  }, []);

  return (
    <GuestLayout>
      <TopLink />
      <div className="flex flex-col md:flex-row overflow-hidden px-4">
        {/* Sidebar */}
        <SidebarPengurus />
        {/* Main Content */}
        {loading ? (
          <div className="w-full">
            <BounceLoading />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center py-5 text-dark-blue dark:text-white text-lg font-semibold">
              <h1>Struktur Pengurus Organisasi</h1>
              <h1>Himpunan Mahasiswa Informatika</h1>
              <h1>Periode 2024/2025</h1>
            </div>
            {/* KETUM, SEKUM, BENDUM */}
            <div className="flex justify-center gap-2 md:gap-14">
              <CardPengurus
                id="bendahara-umum"
                title="Bendahara Umum"
                nama={pengurus?.bendum.nama}
                image={`${BASE_API_URL}/storage/${pengurus?.bendum.foto}`}
                className="mt-60 md:mt-52"
              />
              <CardPengurus
                id="ketua-umum"
                title="Ketua Umum"
                nama={pengurus?.ketum.nama}
                image={`${BASE_API_URL}/storage/${pengurus?.ketum.foto}`}
              />
              <CardPengurus
                id="sekertaris-umum"
                title="Sekertaris Umum"
                nama={pengurus?.sekum.nama}
                image={`${BASE_API_URL}/storage/${pengurus?.sekum.foto}`}
                className="mt-60 md:mt-32"
              />
            </div>
            <h1
              id="bidang-bidang"
              className="border-t-2 border-b-2 border-dark-blue/50 dark:border-white/50 mt-20 mb-16 py-2 px-10 text-center text-lg md:text-2xl font-semibold"
            >
              BIDANG-BIDANG
            </h1>

            {pengurus?.bidang?.map((bidang, index) => {
              return (
                <div key={index}>
                  <HeaderStruktur
                    id={stringDash(
                      stringTanpaKurung(bidang.nama_bidang).toLowerCase()
                    )}
                    title={stringTanpaKurung(bidang.nama_bidang).toUpperCase()}
                  />
                  <BidangPengurus>
                    <CardPengurus
                      title="Ketua Bidang"
                      nama={bidang.kabid?.nama}
                      image={`${BASE_API_URL}/storage/${bidang.kabid?.foto}`}
                    />
                    <CardPengurus
                      title="Sekertaris Bidang"
                      nama={bidang.sekbid?.nama}
                      image={`${BASE_API_URL}/storage/${bidang.sekbid?.foto}`}
                      className="mt-32"
                    />
                  </BidangPengurus>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </GuestLayout>
  );
};

export default Struktur;
