import React from "react";
import { Link } from "react-router-dom";

const CardWithoutPic = () => {
  return (
    <Link to={"/berita/berita-1"} className="flex flex-col gap-3 w-full border-t-2 border-gray-400 lg:hover:scale-105 transition-all">
      <div className="flex flex-row  gap-6 mt-4">
        <p className="text-sm lg:text-xl">Aldi Taher</p>
        <p className="text-sm lg:text-xl opacity-50">12, Juni 2024</p>
      </div>
      <h1 className="text-2xl lg:text-3xl font-bold">
        Ini berita Viral terbaru yang memancing keributan...
      </h1>
      <div className="inline-block">
        <p className="inline-block p-2 rounded-md bg-good-blue text-white">
          Kategori
        </p>
      </div>
    </Link>
  );
};

export default CardWithoutPic;
