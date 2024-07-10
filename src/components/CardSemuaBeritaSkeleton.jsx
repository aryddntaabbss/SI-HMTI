import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const CardSemuaBeritaSkeleton = () => {
  return (
    <div
      className="flex flex-row w-full h-28 lg:h-56 lg:hover:scale-105 transition-all"
    >
      <div
        className="w-2/6 bg-gray-300 dark:bg-slate-700 h-full rounded-xl shadow-md animate-pulse"
        alt=""
      />
      <div className="flex flex-col justify-center w-2/3 pl-4 lg:pl-6 gap-3 lg:gap-6">
        <div className="w-2/5 bg-gray-300 dark:bg-slate-700 h-6 rounded-full animate-pulse"/>
        <div className="w-full bg-gray-300 dark:bg-slate-700 h-6 lg:h-10 rounded-full animate-pulse"/>
        <div className="w-full bg-gray-300 dark:bg-slate-700 h-6 rounded-full animate-pulse"/>
      </div>
    </div>
  );
};

export default CardSemuaBeritaSkeleton;
