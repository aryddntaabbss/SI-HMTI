import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({
  msg = "Sepertinya halaman yang anda cari tidak ditemukan.",
  btnText = "Kembali ke Beranda",
  btnLink = "/",
}) => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-500 dark:text-gray-200">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-bad-blue dark:text-good-blue sm:text-4xl">
          Woops!
        </p>

        <p className="mt-4 text-gray-600 dark:text-white">{msg}</p>

        <Link
          to={btnLink}
          href="https://hmti.unkhair.ac.id"
          className="mt-6 inline-block rounded dark:bg-good-blue bg-good-blue px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
