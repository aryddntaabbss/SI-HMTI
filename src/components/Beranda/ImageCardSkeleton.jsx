import React from "react";

const ImageCardSkeleton = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-full h-full md:h-72 overflow-hidden rounded-md shadow-md"
    >
      <div className="w-full h-full bg-gray-300 dark:bg-slate-700 rounded-xl animate-pulse" />
    </div>
  );
};

export default ImageCardSkeleton;
