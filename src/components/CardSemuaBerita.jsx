import React from "react";
import { Link } from "react-router-dom";

const CardSemuaBerita = () => {
  return (
    <Link to={"/berita/berita-1"} className="flex flex-row w-full h-28 lg:h-56 lg:hover:scale-105 transition-all">
      <img
        className="w-2/6 h-full object-cover rounded-xl shadow-md"
        src="/assets/img/berita-image.jpg"
        alt=""
      />
      <div className="flex flex-col justify-center w-2/3 pl-4 lg:pl-6 gap-1 lg:gap-3">
        <p className="text-xs font-bold text-good-blue">Kategori</p>
        <h1 className="text-sm lg:text-3xl font-bold">
          Ini judul berita viral terbaru yang memancing ribut...
        </h1>
        <div className="flex flex-row gap-6">
          <p className="text-xs lg:text-xl">Aldi Taher</p>
          <p className="text-xs lg:text-xl opacity-50">12, Juni 2024</p>
        </div>
      </div>
    </Link>
  );
};

export default CardSemuaBerita;
