import React from "react";
import { BASE_API_URL } from "../../constants/apiURL";

const Partners = ({ image, name }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={`${BASE_API_URL}/storage/${image}`} alt="Partner logo" className="w-14" />
      <p className="font-bold text-sm dark:text-light-blue text-bad-blue">{name}</p>
    </div>
  );
};

export default Partners;
