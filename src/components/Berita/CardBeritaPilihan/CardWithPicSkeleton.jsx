import React from "react";

const CardWithPicSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 w-full h-auto lg:h-56 lg:hover:scale-105 transition-all">
      <div className="w-2/5 bg-gray-300 dark:bg-slate-700 h-6 rounded-full animate-pulse" />
      <div className="w-full bg-gray-300 dark:bg-slate-700 h-64 rounded-xl animate-pulse" />
      <div className="w-full bg-gray-300 dark:bg-slate-700 h-7 lg:h-10 rounded-full animate-pulse" />
      <div className="w-full bg-gray-300 dark:bg-slate-700 h-6 rounded-full animate-pulse" />
    </div>
  );
};

export default CardWithPicSkeleton;
