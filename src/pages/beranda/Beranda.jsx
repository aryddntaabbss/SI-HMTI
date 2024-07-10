import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import AOS from "aos";

const Beranda = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    alert(searchInput);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <GuestLayout>
      {/* hero */}
      <div className="flex flex-col-reverse lg:flex-row w-full lg:min-h-screen bg-gradient-to-b from-white to-light-blue dark:from-dark-blue dark:to-bad-blue overflow-hidden">
        <div className="w-full lg:w-1/2 px-6 py-5 lg:py-16 lg:pl-40 flex justify-center items-center">
          <div
            data-aos="fade-right"
            className="flex flex-col gap-5 w-auto h-auto"
          >
            <h1 className="font-bold text-4xl lg:text-5xl">HMTI UNKHAIR</h1>
            <h3 className="text-3xl">
              Satu Wadah Berkembang Bersama, Berbagi, Mengolah Digitalisasi
            </h3>
            <h3 className="font-bold text-3xl">#HMTITetapSatu</h3>
            <div className="flex gap-3 pt-3">
              <Link className="border-2 border-good-blue text-good-blue px-4 py-2 rounded-md font-bold hover:bg-good-blue hover:scale-105 hover:text-light-blue transition-all">
                Biografi HMTI
              </Link>
              <Link className="bg-good-blue px-4 border-2 border-transparent text-light-blue py-2 rounded-md font-bold hover:bg-transparent hover:scale-105 hover:border-good-blue hover:text-good-blue transition-all">
                Organisasi
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-16 lg:pr-40 flex justify-center items-center">
          <img
            data-aos="fade-left"
            src="/logoHmti.png"
            alt="Logo HMTI"
            className="w-2/4 lg:w-4/5"
          />
        </div>
      </div>
      {/* hero */}

      {/* event */}
      <div className="w-full bg-light-blue dark:bg-bad-blue px-6 lg:px-16 pt-32 lg:pt-0 overflow-hidden">
        <div className="mb-4 font-bold text-center relative">
          <span
            data-aos="fade-left"
            className="text-3xl md:text-5xl absolute inset-0 flex justify-center items-center text-bad-blue dark:text-white z-10"
          >
            HMTI EVENTS
          </span>
          <h1
            data-aos="fade-right"
            className="text-6xl md:text-8xl italic text-gray-100 dark:text-bad-blue text-border relative z-0"
          >
            HMTI EVENTS
          </h1>
        </div>
        <h1
          data-aos="fade-up"
          className="w-full text-center text-xl font-bold lg:text-2xl italic pt-4 pb-8"
        >
          Semangat Berinovasi
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <Link
            to={"/event"}
            data-aos="fade-up"
            className="relative w-full rounded-lg overflow-hidden hover:scale-105 ease-in-out transition-all shadow-lg"
            style={{ height: "550px" }}
          >
            <img
              src="/assets/img/horizontal1.jpg"
              alt="Gambar Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-transparent bg-opacity-50 flex items-center justify-end p-8">
              <div className="font-bold text-center flex flex-col rotate-90">
                <h1
                  className="text-8xl italic text-transparent text-border relative z-0"
                  style={{ whiteSpace: "nowrap" }}
                >
                  MARCH EVENT
                </h1>
                <h1 className="font-bold text-6xl text-white pb-72 lg:pb-60">
                  MARCH EVENT
                </h1>
              </div>
            </div>
          </Link>
          <Link
            to={"/event"}
            data-aos="fade-up"
            className="relative w-full rounded-lg overflow-hidden hover:scale-105 ease-in-out transition-all shadow-lg"
            style={{ height: "550px" }}
          >
            <img
              src="/assets/img/horizontal2.jpg"
              alt="Gambar Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-transparent bg-opacity-50 flex items-center justify-end p-8">
              <div className="font-bold text-center flex flex-col rotate-90">
                <h1
                  className="text-8xl italic text-transparent text-border relative z-0"
                  style={{ whiteSpace: "nowrap" }}
                >
                  DIES NATALIS
                </h1>
                <h1 className="font-bold text-6xl text-white pb-60 lg:pb-52">
                  DIES NATALIS
                </h1>
              </div>
            </div>
          </Link>
          <Link
            to={"/event"}
            data-aos="fade-up"
            className="relative w-full rounded-lg overflow-hidden hover:scale-105 ease-in-out transition-all shadow-lg"
            style={{ height: "550px" }}
          >
            <img
              src="/assets/img/horizontal3.jpg"
              alt="Gambar Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-blue to-transparent bg-opacity-50 flex items-center justify-end p-8">
              <div className="font-bold text-center flex flex-col rotate-90">
                <h1
                  className="text-8xl italic text-transparent text-border relative z-0"
                  style={{ whiteSpace: "nowrap" }}
                >
                  IT-EXPO
                </h1>
                <h1 className="font-bold text-6xl text-white pb-0 lg:pb-0">
                  IT-EXPO
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* event */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-white dark:bg-dark-blue"
      >
        <path
          className="fill-light-blue dark:fill-bad-blue"
          fill-opacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,122.7C480,139,600,213,720,245.3C840,277,960,267,1080,229.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* berita laptop */}
      <div className="w-full hidden lg:block bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue px-6 lg:px-16 py-16 overflow-hidden">
        <div className="mb-4 font-bold text-center relative">
          <span
            data-aos="fade-left"
            className="text-3xl md:text-5xl absolute inset-0 flex justify-center items-center text-dark-blue dark:text-light-blue z-10"
          >
            HMTI NEWS
          </span>
          <h1
            data-aos="fade-right"
            className="text-6xl md:text-8xl italic text-transparent text-border relative z-0"
          >
            HMTI NEWS
          </h1>
        </div>
        <h1
          data-aos="fade-up"
          className="w-full text-center text-xl font-bold lg:text-2xl italic pt-4 pb-8"
        >
          Berita Populer
        </h1>
        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              to={"/berita/berita-1"}
              className="flex flex-col gap-3 w-full lg:hover:scale-105 transition-all"
            >
              <div className="flex flex-row gap-6">
                <p className="text-sm lg:text-xl">Aldi Taher</p>
                <p className="text-sm lg:text-xl opacity-50">12, Juni 2024</p>
              </div>
              <img
                className="object-cover w-full shadow-md h-64 rounded-xl"
                src="/assets/img/berita-image.jpg"
                alt=""
              />
              <h1 className="text-xl lg:text-2xl font-bold">
                Ini berita Viral terbaru yang memancing keributan...
              </h1>
              <div className="inline-block">
                <p className="inline-block p-2 rounded-md bg-good-blue text-white">
                  Kategori
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <div data-aos="fade-up" className="w-full flex justify-center pt-12">
            <Link
              className="border-2 border-good-blue text-good-blue px-4 py-2 rounded-md font-bold hover:bg-good-blue hover:scale-105 hover:text-light-blue transition-all"
              to={"/berita"}
            >
              Lihat Berita Lainnya
            </Link>
          </div>
        </div>
      </div>
      {/* berita laptop */}

      {/* berita hp */}
      <div className="w-full lg:hidden bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue px-6 lg:px-16 pt-10 pb-16 overflow-hidden">
        <div className="mb-4 font-bold text-center relative">
          <span
            data-aos="fade-left"
            className="text-3xl md:text-5xl absolute inset-0 flex justify-center items-center text-dark-blue dark:text-light-blue z-10"
          >
            HMTI NEWS
          </span>
          <h1
            data-aos="fade-right"
            className="text-6xl md:text-8xl italic text-transparent text-border relative z-0"
          >
            HMTI NEWS
          </h1>
        </div>
        <h1
          data-aos="fade-up"
          className="w-full text-center text-xl font-bold lg:text-2xl italic pt-4 pb-8"
        >
          Berita Populer
        </h1>
        <div
          data-aos="fade-up"
          className="overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          <div className="w-full flex flex-row gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Link
                key={index}
                to={`/berita/berita-1`}
                className="flex-shrink-0 flex flex-col gap-3 w-60"
              >
                <div className="flex flex-row gap-6">
                  <p className="text-sm lg:text-xl">Aldi Taher</p>
                  <p className="text-sm lg:text-xl opacity-50">12, Juni 2024</p>
                </div>
                <img
                  className="object-cover w-full shadow-md h-64 rounded-xl"
                  src="/assets/img/berita-image.jpg"
                  alt=""
                />
                <h1 className="font-bold whitespace-pre-wrap">
                  Ini berita Viral terbaru yang memancing keributan...
                </h1>
                <div className="inline-block">
                  <p className="inline-block p-2 rounded-md bg-good-blue text-white">
                    Kategori
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="w-full flex justify-center pt-12">
          <Link
            className="border-2 border-good-blue text-good-blue px-4 py-2 rounded-md font-bold hover:bg-good-blue hover:scale-105 hover:text-light-blue transition-all"
            to={"/berita"}
          >
            Lihat Berita Lainnya
          </Link>
        </div>
      </div>
      {/* berita hp */}

      {/* galery */}
      <div className="w-full bg-light-blue dark:bg-bad-blue pt-16 px-6 lg:px-16 overflow-hidden">
        <div className="mb-4 font-bold text-center relative">
          <span
            data-aos="fade-left"
            className="text-3xl md:text-5xl absolute inset-0 flex justify-center items-center text-bad-blue dark:text-white z-10"
          >
            HMTI GALLERY
          </span>
          <h1
            data-aos="fade-right"
            className="text-6xl md:text-8xl italic text-gray-100 dark:text-bad-blue text-border relative z-0"
          >
            HMTI GALLERY
          </h1>
        </div>
        <section data-aos="fade-up" className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "horizontal1.jpg",
                "landscape3.jpg",
                "potret2.jpg",
                "potret4.jpg",
                "landscape2.jpg",
                "horizontal4.jpg",
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
      </div>
      {/* galery */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-light-blue dark:bg-bad-blue"
      >
        <path
          className="fill-blue-600"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,74.7C672,32,768,32,864,74.7C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </GuestLayout>
  );
};

export default Beranda;
