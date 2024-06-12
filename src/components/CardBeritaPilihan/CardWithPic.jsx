import React from "react";
import { Link } from "react-router-dom";

const CardWithPic = () => {
  return (
    <Link to={"/berita/berita-1"} className="flex flex-col gap-3 w-full lg:hover:scale-105 transition-all">
      <div className="flex flex-row gap-6">
        <p className="text-sm lg:text-xl">Aldi Taher</p>
        <p className="text-sm lg:text-xl opacity-50">12, Juni 2024</p>
      </div>
      <img
        className="object-cover w-full shadow-md h-64 rounded-xl"
        src="/assets/img/berita-image.jpg"
        alt=""
      />
      <h1 className="text-2xl lg:text-3xl font-bold">
        Ini berita Viral terbaru yang memancing keributan...
      </h1>
      <div className="inline-block">
        <p className="inline-block p-2 rounded-md bg-good-blue text-white">Kategori</p>
      </div>
    </Link>
  );
};

export default CardWithPic;
