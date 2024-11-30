import React from "react";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../constants/apiURL";

const CardSemuaBerita = ({ slug, gambar, kategori, judul, penulis, tanggal }) => {

  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 6).join(" ");
  };

  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={`/berita/${slug}`} className="flex flex-row w-full h-28 lg:h-56 lg:hover:scale-105 transition-all">
      <img
        className="w-2/6 h-full object-cover rounded-xl shadow-md"
        src={`${BASE_API_URL}/storage/${gambar}`}
        alt=""
      />
      <div className="flex flex-col justify-center w-2/3 pl-4 lg:pl-6 gap-1 lg:gap-3">
        <p className="text-xs font-bold text-good-blue">• {kategori}</p>
        <h1 className="text-sm lg:text-3xl font-bold">
          {truncateTitle(judul)}
        </h1>
        <div className="flex flex-row gap-6">
          <p className="text-xs lg:text-xl">{penulis}</p>
          <p className="text-xs lg:text-xl opacity-50">{tanggal.slice(0, 10)}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardSemuaBerita;
