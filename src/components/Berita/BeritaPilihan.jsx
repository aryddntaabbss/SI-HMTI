import React, { useEffect, useState } from "react";
import CardWithoutPic from "./CardBeritaPilihan/CardWithoutPic";
import CardWithPic from "./CardBeritaPilihan/CardWithPic";
import SearchForm from "./SearchForm";
import AOS from "aos";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";
import CardWithPicSkeleton from "./CardBeritaPilihan/CardWithPicSkeleton";

const BeritaPilihan = () => {
  const [loadingBeritaPilihan, setLoadingBeritaPilihan] = useState(true);
  const [beritaPilihan, setBeritaPilihan] = useState([]);

  useEffect(() => {
    fetchBeritaPilihan();
    AOS.init({
      duration: 1000,
    });
  }, []);

  const fetchBeritaPilihan = async () => {
    setLoadingBeritaPilihan(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/berita-pilihan`);
      setBeritaPilihan(await response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingBeritaPilihan(false);
    }
  };
  return (
    <>
      {/* search */}
      <SearchForm />
      {/* search */}

      <h1
        data-aos="fade-up"
        className="text-xl font-bold text-center w-full py-8"
      >
        Berita Pilihan
      </h1>

      {/* card berita terpilih */}
      <div data-aos="fade-up" className="flex flex-col w-full gap-6">
        <div data-aos="fade-up" className="flex flex-col w-full gap-7">
          {loadingBeritaPilihan ? (
            Array(2)
              .fill(0)
              .map((_, index) => <CardWithPicSkeleton key={index} />)
          ) : beritaPilihan.length === 0 ? (
            <p className="w-full text-center font-bold text-xl">
              Berita Pilihan Tidak Ada
            </p>
          ) : (
            beritaPilihan.length > 0 && (
              <CardWithPic
                key={beritaPilihan[0]?.id}
                slug={beritaPilihan[0]?.slug}
                gambar={beritaPilihan[0]?.gambar}
                penulis={beritaPilihan[0]?.penulis}
                kategori={beritaPilihan[0]?.kategori?.judul_kategori}
                tanggal={beritaPilihan[0]?.created_at}
                judul={beritaPilihan[0]?.judul}
              />
            )
          )}
        </div>
        {loadingBeritaPilihan ? (
          Array(2)
            .fill(0)
            .map((_, index) => <CardWithPicSkeleton key={index} />)
        ) : beritaPilihan.length === 0 ? (
          <p className="w-full text-center font-bold text-xl"></p>
        ) : (
          beritaPilihan
            .slice(1)
            .map((news) => (
              <CardWithoutPic
                key={news?.id}
                slug={news?.slug}
                penulis={news?.penulis}
                kategori={news?.kategori?.judul_kategori}
                tanggal={news?.created_at}
                judul={news?.judul}
              />
            ))
        )}
      </div>
      {/* card berita terpilih */}
    </>
  );
};

export default BeritaPilihan;
