import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({slug, author, date, title, kategori, image}) => {
  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 6).join(" ");
  };
  return (
    <Link
      to={`/berita/${slug}`}
      className="flex flex-col gap-3 w-full lg:hover:scale-105 transition-all"
    >
      <div className="flex flex-row gap-3">
        <p className="text-start">{author}</p>
        <p className="text-start opacity-50">{date.slice(0, 10)}</p>
      </div>
      <img
        className="object-cover w-full shadow-md h-64 rounded-xl"
        src={image}
        alt="news image"
      />
      <h1 className="text-xl lg:text-2xl font-bold">
      {truncateTitle(title)}
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
