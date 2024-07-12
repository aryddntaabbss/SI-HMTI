import React from "react";

const NewsCardSkeleton = () => {
  return (
    <div
      className="flex flex-col gap-3 w-full"
    >
      <div className="flex flex-row gap-3">
        <div className="bg-gray-300 dark:bg-slate-700 w-12 rounded-full h-4 animate-pulse"/>
        <div className="bg-gray-300 dark:bg-slate-700 w-12 rounded-full h-4 animate-pulse"/>
      </div>
      <div
        className="bg-gray-300 dark:bg-slate-700 w-full h-64 rounded-xl animate-pulse"
      />
      <div className="bg-gray-300 dark:bg-slate-700 rounded-full h-6 animate-pulse"/>
      <div className="inline-block">
        <div className="bg-gray-300 dark:bg-slate-700 rounded-md h-6 w-1/4 animate-pulse"/>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
