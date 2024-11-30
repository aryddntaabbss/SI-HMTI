import React from "react";
import { BASE_API_URL } from "../../constants/apiURL";

const ImageCard = ({ image, altText = "Image", className = "" }) => {
  const imageUrl = `${BASE_API_URL}/storage/${image}`;

  const handleError = (event) => {
    event.target.src = "/path/to/fallback-image.jpg";
  };

  return (
    <div
      data-aos="fade-up"
      className={`w-full h-full md:h-72 overflow-hidden rounded-md shadow-md ${className}`}
    >
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
        onError={handleError}
      />
    </div>
  );
};

export default ImageCard;
