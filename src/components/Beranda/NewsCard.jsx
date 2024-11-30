import React from "react";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../constants/apiURL";

const NewsCard = ({
  slug,
  author,
  date,
  title,
  kategori,
  image,
  altText = "News image",
  className = "",
}) => {
  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.length > 6 ? words.slice(0, 6).join(" ") + "..." : title;
  };

  const handleError = (event) => {
    event.target.src = "/path/to/fallback-image.jpg";
  };

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/berita/${slug}`}
      className={`flex flex-col gap-3 w-full lg:hover:scale-105 transition-all ${className}`}
    >
      <div className="flex flex-row gap-3">
        <p className="text-start font-bold">{author}</p>
        <p className="text-start opacity-50">{date.slice(0, 10)}</p>
      </div>

      <img
        className="object-cover w-full shadow-md h-64 rounded-xl"
        src={`${BASE_API_URL}/storage/${image}`}
        alt={altText}
        onError={handleError}
      />

      <h1 className="text-xl lg:text-2xl font-bold">{truncateTitle(title)}</h1>
      <div className="inline-block">
        <p className="inline-block text-good-blue">• {kategori}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
