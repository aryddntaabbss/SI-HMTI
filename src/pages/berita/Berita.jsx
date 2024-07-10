import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { Link, useParams, useLocation } from "react-router-dom";
import CardSemuaBerita from "../../components/CardSemuaBerita";
import CardSemuaBeritaSkeleton from "../../components/CardSemuaBeritaSkeleton";
import { CiSearch } from "react-icons/ci";
import CardWithPic from "../../components/CardBeritaPilihan/CardWithPic";
import CardWithoutPic from "../../components/CardBeritaPilihan/CardWithoutPic";
import AOS from "aos";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";

const Berita = () => {
  const [searchInput, setSearchInput] = useState("");
  const [urlKategori, setUrlKategori] = useState("");
  const [kategori, setKategori] = useState([]);
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading
  const { kategoriBerita } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchKategori();
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
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
    fetchBeritaWithKategori();
  }, [urlKategori]);

  const fetchKategori = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/kategori-berita`);
      setKategori(await response.data);
    } catch (error) {
      // console.error("Error:", error);
    }
  };

  const fetchBeritaWithKategori = async () => {
    setLoading(true);
    try {
      const response = await axios.get(urlKategori);
      setBerita(await response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    alert(searchInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <GuestLayout>
      <div className="flex flex-col-reverse w-full px-3 py-14 lg:p-16 lg:flex-row overflow-hidden">
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

          {/* card semua berita */}
          <div data-aos="fade-up" className="flex flex-col w-full gap-7 pt-9">
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => <CardSemuaBeritaSkeleton key={index} />)
              : berita.map((news) => (
                  <CardSemuaBerita
                    key={news?.id}
                    slug={news?.slug}
                    gambar={news?.gambar}
                    penulis={news?.penulis}
                    kategori={news.kategori?.judul_kategori}
                    tanggal={news?.created_at}
                    judul={news?.judul}
                  />
                ))}
          </div>
          {/* card semua berita */}
        </div>
        <div className="w-full lg:w-2/6 px-3 mb-8 lg:mb-0">
          {/* search */}
          <div data-aos="fade-left" className="w-full relative pt-1">
            <input
              placeholder="Cari berita..."
              className="w-full rounded-full pl-4 outline-good-blue dark:outline-white dark:bg-bad-blue pr-14 py-3 shadow-md"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>
              <CiSearch className="absolute right-3 top-3 text-3xl hover:text-good-blue transition-all" />
            </button>
          </div>
          {/* search */}

          <h1
            data-aos="fade-up"
            className="text-xl font-bold text-center w-full py-8"
          >
            Berita Pilihan
          </h1>

          {/* card berita terpilih */}
          <div data-aos="fade-up" className="flex flex-col w-full gap-6">
            <CardWithPic />
            <CardWithoutPic />
            <CardWithoutPic />
            <CardWithoutPic />
          </div>
          {/* card berita terpilih */}
        </div>
      </div>
    </GuestLayout>
  );
};

export default Berita;
