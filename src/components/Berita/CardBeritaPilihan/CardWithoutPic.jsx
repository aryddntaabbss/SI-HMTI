import React from "react";
import { Link } from "react-router-dom";

const CardWithoutPic = ({ slug, penulis, tanggal, judul, kategori }) => {
  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 6).join(" ");
  };

  return (
    <Link
      to={`/berita/${slug}`}
      className="flex flex-col gap-3 w-full border-t-2 border-gray-400 lg:hover:scale-105 transition-all"
    >
      <div className="flex flex-row  gap-6 mt-4">
        <p className="text-sm lg:text-xl">{penulis}</p>
        <p className="text-sm lg:text-xl opacity-50">{tanggal.slice(0, 10)}</p>
      </div>
      <h1 className="text-2xl lg:text-3xl font-bold">
      {truncateTitle(judul)}
      </h1>
      <div className="inline-block">
        <p className="inline-block p-2 rounded-md bg-good-blue text-white">
          {kategori}
        </p>
      </div>
    </Link>
  );
};

export default CardWithoutPic;
