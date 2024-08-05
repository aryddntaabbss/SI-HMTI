import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import SearchForm from "../../components/Berita/SearchForm";
import AOS from "aos";
import CardSemuaBeritaSkeleton from "../../components/Berita/CardSemuaBeritaSkeleton";
import CardSemuaBerita from "../../components/Berita/CardSemuaBerita";
import { BASE_API_URL } from "../../constants/apiURL";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchBerita = () => {
  const [loading, setLoading] = useState(true);
  const [berita, setBerita] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    fetchBerita();
  }, [slug]);
  
  const fetchBerita = async () => {
    setLoading(true);
    setBerita([]);
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/search?cari=${slug}`
      );
      setBerita(await response.data);
    } catch (error) {
      // console.error("Error:", error);
      setBerita([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestLayout>
      <div className="flex justify-center px-3 py-14 lg:p-16 overflow-hidden">
        <div className="flex flex-col mx-auto w-full max-w-screen-xl">
          <div className="w-full flex justify-center">
            <div className="w-full lg:w-3/5 px-3 lg:px-0">
              <SearchForm />
            </div>
          </div>
          <div className="w-full flex justify-center">
            {/* card berita */}
            <div data-aos="fade-up" className="flex flex-col w-full lg:w-3/5 gap-7 pt-9">
                <h1 className="font-bold w-full text-start">Hasil Pencarian "{slug}"</h1>
              {loading ? (
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <CardSemuaBeritaSkeleton
                      key={index}
                    />
                  ))
              ) : berita.length === 0 ? (
                <p className="w-full text-center font-bold text-xl">
                  Berita Tidak Ditemukan
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
          </div>
        </div>
        {/* card berita */}
      </div>
    </GuestLayout>
  );
};

export default SearchBerita;
