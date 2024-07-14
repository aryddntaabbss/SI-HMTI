import React from "react";
import { BASE_API_URL } from "../../constants/apiURL";

const ImageCard = ({ image }) => {
  return (
    <div
      data-aos="fade-up"
      className="w-full h-full md:h-72 overflow-hidden rounded-md shadow-md"
    >
      <img
        src={`${BASE_API_URL}/storage/${image}`}
        alt="image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
