import React from "react";
import { Link } from "react-router-dom";

const NewsCardSmartphone = ({ id, author, date, title, kategori, image }) => {
  return (
    <Link
      key={id}
      to={`/berita/berita-1`}
      className="flex-shrink-0 flex flex-col gap-3 w-60"
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
      <h1 className="font-bold whitespace-pre-wrap">
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

export default NewsCardSmartphone;
