import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants/apiURL";
import { BASE_API_KEY } from "../constants/apiURL";
import { dateFormat } from "../libs/date-libs";

const OtherNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/semua-berita`, {
        headers: {
          "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      setNews(response.data); // Menyimpan data ke state
    } catch (error) {
      setError("Gagal mengambil data. Status error: " + error.response?.status);
      console.error("Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-[90%] mx-auto my-32 py-7 flex md:flex-row flex-col justify-between gap-10 border-t-[3px] border-b-[3px] border-dark-blue dark:border-light-blue">
      {news?.map((n, i) => {
        if (i < 3) {
          return (
            <a key={i} href={`/berita/${n.slug}`} className="group">
              <p className="text-sm lg:text-base">{`${dateFormat(
                n?.created_at
              )} | ${n.penulis} `}</p>
              <h2 className="py-2 font-semibold md:text-lg group-hover:text-good-blue transition-all">
                {n.judul}
              </h2>
            </a>
          );
        }
        return null; // Menghindari masalah jika array tidak terisi
      })}
    </div>
  );
};

export default OtherNews;
