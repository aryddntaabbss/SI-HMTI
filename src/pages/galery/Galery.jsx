import React from "react";
import GuestLayout from "../../layouts/GuestLayout";

const Galery = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search functionality here
    console.log("Search term:", searchTerm);
  };

  return (
    <GuestLayout>
      <section className="h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-dark-blue dark:to-dark-blue flex items-center">
        <div className="container mx-auto px-8 lg:px-32">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-4">Galeri HMTI</h1>
            <p className="text-3xl mb-8">
              Simpan Sejuta Cerita, Biarkan <br /> Kenangan Berbicara
            </p>
            <form
              className="relative flex items-center mb-8"
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Cari Gambar..."
                className="w-full px-4 py-2 border-0 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-4 bg-transparent text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65a7.5 7.5 0 010 10.7z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-4">Cuplikan Koleksi Terkini</h2>
      <div className="grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <img
          src="https://via.placeholder.com/200x300"
          alt="Image 1"
          className="rounded-md w-full h-auto object-cover"
        />
        <div className="sm:col-span-2 md:col-span-1">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Image 2"
            className="rounded-md w-full h-auto object-cover"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="Image 3"
            className="rounded-md w-full h-auto object-cover mt-4"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <img
            src="https://via.placeholder.com/300x300"
            alt="Image 4"
            className="rounded-md w-full h-auto object-cover"
          />
          <img
            src="https://via.placeholder.com/600x300"
            alt="Image 5"
            className="rounded-md w-full h-auto object-cover mt-4"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Jelajahi Kenangan-kenangan</h2>
      <div className="grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <img
          src="https://via.placeholder.com/200x300"
          alt="Image 1"
          className="rounded-md w-full h-auto object-cover"
        />
        <div className="sm:col-span-2 md:col-span-1">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Image 2"
            className="rounded-md w-full h-auto object-cover"
          />
          <img
            src="https://via.placeholder.com/300x300"
            alt="Image 3"
            className="rounded-md w-full h-auto object-cover mt-4"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <img
            src="https://via.placeholder.com/300x300"
            alt="Image 4"
            className="rounded-md w-full h-auto object-cover"
          />
          <img
            src="https://via.placeholder.com/600x300"
            alt="Image 5"
            className="rounded-md w-full h-auto object-cover mt-4"
          />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Galery;
