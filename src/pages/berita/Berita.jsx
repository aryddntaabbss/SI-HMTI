import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { Link, useParams, useLocation } from "react-router-dom";
import CardSemuaBerita from "../../components/Berita/CardSemuaBerita";
import CardSemuaBeritaSkeleton from "../../components/Berita/CardSemuaBeritaSkeleton";
import AOS from "aos";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";
import BeritaPilihan from "../../components/Berita/BeritaPilihan";

const Berita = () => {
  const [urlKategori, setUrlKategori] = useState("");
  const [kategori, setKategori] = useState([]);
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { kategoriBerita } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchKategori();
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (kategoriBerita === "semua-berita") {
      setUrlKategori(`${BASE_API_URL}/api/semua-berita`);
    } else {
      setUrlKategori(`${BASE_API_URL}/api/kategori/${kategoriBerita}/berita`);
    }
  }, [kategoriBerita]);

  useEffect(() => {
    if (urlKategori) {
      fetchBeritaWithKategori();
    }
  }, [urlKategori]);

  const fetchKategori = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/kategori-berita`);
      setKategori(await response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchBeritaWithKategori = async () => {
    setLoading(true);
    setBerita([]);
    try {
      const response = await axios.get(urlKategori);
      setBerita(await response.data);
    } catch (error) {
      console.error("Error:", error);
      setBerita([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestLayout>
      <div className="flex justify-center px-3 py-14 lg:p-16 overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row mx-auto w-full max-w-screen-xl">
          <div className="w-full lg:w-2/3 px-3">
            <div className="relative w-full">
              <div className="overflow-x-auto whitespace-nowrap px-4 border-b-2 border-t-2 border-gray-400 py-3 scrollbar-hide">
                <nav data-aos="fade-right" className="flex gap-10">
                  <Link
                    to={"/berita/kategori/semua-berita"}
                    className={`text-md pl-4 lg:text-xl ${
                      location.pathname.includes("semua-berita")
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    Semua Berita
                  </Link>
                  {kategori.map((kat, index) => (
                    <Link
                      key={kat.id}
                      to={`/berita/kategori/${kat?.slug}`}
                      className={`text-md lg:text-xl ${
                        location.pathname.includes(kat?.slug) ? "font-bold" : ""
                      } ${index === kategori.length - 1 ? "pr-6" : ""}`}
                    >
                      {kat?.judul_kategori}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="absolute top-0 bottom-0 left-0 w-5 lg:w-12 pointer-events-none bg-gradient-to-r from-light-blue dark:from-dark-blue"></div>
              <div className="absolute top-0 bottom-0 right-0 w-5 lg:w-12 pointer-events-none bg-gradient-to-l from-light-blue dark:from-dark-blue"></div>
            </div>

            {/* card berita */}
            <div data-aos="fade-up" className="flex flex-col w-full gap-7 pt-9">
              {loading ? (
                Array(3)
                  .fill(0)
                  .map((_, index) => <CardSemuaBeritaSkeleton key={index} />)
              ) : berita.length === 0 ? (
                <p className="w-full text-center font-bold text-xl">
                  Berita Tidak Ada
                </p>
              ) : (
                berita.map((news) => (
                  <CardSemuaBerita
                    key={news?.id}
                    slug={news?.slug}
                    gambar={news?.gambar}
                    penulis={news?.penulis}
                    kategori={news.kategori?.judul_kategori}
                    tanggal={news?.created_at}
                    judul={news?.judul}
                  />
                ))
              )}
            </div>
            {/* card berita */}
          </div>
          <div className="w-full lg:w-2/6 px-3 mb-8 lg:mb-0">
            <BeritaPilihan/>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Berita;
