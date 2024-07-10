import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({id, author, date, title, kategori, image}) => {
  return (
    <Link
      key={id}
      to={"/berita/berita-1"}
      className="flex flex-col gap-3 w-full lg:hover:scale-105 transition-all"
    >
      <div className="flex flex-row gap-6">
        <p className="text-sm lg:text-xl">{author}</p>
        <p className="text-sm lg:text-xl opacity-50">{date}</p>
      </div>
      <img
        className="object-cover w-full shadow-md h-64 rounded-xl"
        src={image}
        alt="news image"
      />
      <h1 className="text-xl lg:text-2xl font-bold">
        {title}...
      </h1>
      <div className="inline-block">
        <p className="inline-block p-2 rounded-md bg-good-blue text-white">
          {kategori}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
