import React from "react";

const ImageCard = ({id, image}) => {
  return (
    <div
      key={id}
      className="w-full h-48 md:h-64 overflow-hidden rounded-md shadow-md"
    >
      <img
        src={image}
        alt="image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
