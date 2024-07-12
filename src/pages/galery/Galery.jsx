import React from "react";
import SectionTitle from "../../components/Beranda/SectionTitle";
import ImageCard from "../../components/Beranda/ImageCard";
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
      <div className="w-full bg-light-blue dark:bg-bad-blue flex items-center justify-center lg:py-60">
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
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-white dark:bg-dark-blue"
      >
        <path
          className="fill-light-blue dark:fill-bad-blue"
          fillOpacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,122.7C480,139,600,213,720,245.3C840,277,960,267,1080,229.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* <div className="py-8">
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
        </div> */}

      <div className="bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue py-8">
        <div className="w-full pt-16 px-6 lg:px-16 overflow-hidden">
          <SectionTitle title={"CUPLIKAN KOLEKSI TERKINI"} />
          <div data-aos="fade-up" className="py-8">
            <div className="container mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <ImageCard
                    key={index}
                    id={index}
                    image={`${process.env.PUBLIC_URL}/assets/img/500x400.png`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 py-8">
        <div className="w-full pt-16 px-6 lg:px-16 overflow-hidden">
          <SectionTitle title={"JELAJAHI KENANGAN"} />
          <div data-aos="fade-up" className="py-8">
            <div className="container mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <ImageCard
                    key={index}
                    id={index}
                    image={`${process.env.PUBLIC_URL}/assets/img/500x400.png`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-light-blue dark:bg-bad-blue"
      >
        <path
          className="fill-blue-600"
          fillOpacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,74.7C672,32,768,32,864,74.7C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </GuestLayout>
  );
};

export default Galery;
