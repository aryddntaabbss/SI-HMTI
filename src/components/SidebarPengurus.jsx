import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants/apiURL";
import { stringDash, stringTanpaKurung } from "../libs/string-libs";

const SidebarPengurus = () => {
  const [pengurus, setPengurus] = useState()

  const fetchPengurus = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/struktur`
      );
      setPengurus(response.data);
    } catch (error) {
      // console.error("Error:", error);
      // setError(true);
    }
    // setLoading(false);
  }

  useEffect(() => {
    fetchPengurus()
  }, [])
  return (
    <aside className="hidden min-w-[200px] max-w-[225px] ms-16 md:flex flex-col gap-3">
      <a href="#ketua-umum" className="text-dark-blue dark:text-white">
        Ketua Umum
      </a>
      <a
        href="#sekertaris-umum"
        className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
      >
        Sekertaris Umum
      </a>
      <a
        href="#bendahara-umum"
        className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
      >
        Bendahara Umum
      </a>
      <a href="#bidang-bidang" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
        Bidang-Bidang
      </a>
      <div className="ms-5 flex flex-col gap-3">
        {pengurus?.bidang?.map((bidang, index) => (
          <a key={index}
            href={`#${stringDash(stringTanpaKurung(bidang.nama_bidang).toLowerCase())}`}
            className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
          >
            {stringTanpaKurung(bidang.nama_bidang)}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SidebarPengurus;
