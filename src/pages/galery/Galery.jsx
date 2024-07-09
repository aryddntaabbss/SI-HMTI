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
      <section className="h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center">
        <div className="container mx-auto px-8 lg:px-32 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-5xl font-bold mb-4">Galeri HMTI</h1>
            <p className="text-3xl mb-8">
              Simpan Sejuta Cerita, Biarkan <br /> Kenangan Berbicara
            </p>
            <form
              className="relative flex items-center justify-center mb-8"
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Cari Gambar..."
                className="w-full max-w-lg px-4 py-2 border-0 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "potret1.jpg",
              "potret2.jpg",
              "potret3.jpg",
              "potret4.jpg",
              "potret2.jpg",
              "potret3.jpg",
            ].map((imageName, index) => (
              <div key={index} className="flex flex-wrap gap-4 justify-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`}
                  alt={`Image ${index + 6}`}
                  className="w-60 h-60 m-2 rounded-md shadow-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-blue-950 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Cuplikan Koleksi Terkini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "horizontal1.jpg",
              "landscape3.jpg",
              "potret2.jpg",
              "potret4.jpg",
              "landscape2.jpg",
              "horizontal4.jpg",
              "landscape1.jpg",
              "horizontal3.jpg",
              "potret3.jpg",
            ].map((imageName, index) => (
              <div
                key={index}
                className="w-full h-48 md:h-64 overflow-hidden rounded-md shadow-md"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`}
                  alt={`Image ${index + 6}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-10 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Jelajahi Kenangan-kenangan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["landscape3.jpg", "landscape2.jpg", "landscape1.jpg"].map(
              (imageName, index) => (
                <div
                  key={index}
                  className="w-full h-auto rounded-md shadow-md object-cover"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/${imageName}`}
                    alt={`Image ${index + 6}`}
                    className="w-full h-auto rounded-md shadow-md object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </GuestLayout>
  );
};

export default Galery;
