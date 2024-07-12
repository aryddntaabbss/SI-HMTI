import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants/apiURL";
import { dateFormat } from "../libs/date-libs";

const OtherNews = () => {
  const [news, setNews] = useState();

  const fecthNews = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/semua-berita`);
      setNews(await response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fecthNews();
  }, []);

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
      })}
    </div>
  );
};

export default OtherNews;
