import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ link, image, title }) => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={link}
      data-aos="fade-up"
      className="relative w-full rounded-lg overflow-hidden h-[550px] shadow-lg"
    >
      <img
        src={image}
        alt="Gambar Event"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-transparent hover:pl-20 hover:from-bad-blue transition-all bg-opacity-50 flex items-center justify-center p-8">
        <div className="font-bold text-center flex flex-col rotate-90 pt-40">
          <h1
            className="text-8xl italic text-transparent text-border-2 relative z-0"
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </h1>
          <h1 className="font-bold text-6xl text-white">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
