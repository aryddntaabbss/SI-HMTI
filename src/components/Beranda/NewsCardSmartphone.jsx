import React from "react";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../constants/apiURL";

const NewsCardSmartphone = ({ slug, author, date, title, kategori, image }) => {
  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 6).join(" ");
  };
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/berita/${slug}`}
      data-aos="fade-up"
      className="flex-shrink-0 flex flex-col gap-3 w-60 whitespace-pre-wrap"
    >
      <div className="flex flex-row gap-3">
        <p className="text-xs text-start font-bold">{author}</p>
        <p className="text-xs text-start opacity-50">{date.slice(0, 10)}</p>
      </div>
      <img
        className="object-cover w-full shadow-md h-64 rounded-xl"
        src={`${BASE_API_URL}/storage/${image}`}
        alt="news image"
      />
      <h1 className="text-xl lg:text-2xl font-bold">{truncateTitle(title)}</h1>
      <div className="inline-block">
        <p className="inline-block text-good-blue">• {kategori}</p>
      </div>
    </Link>
  );
};

export default NewsCardSmartphone;
