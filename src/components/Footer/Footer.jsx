import React from "react";
import LogoHmti from "../../assets/img/hmti-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-600 ">
        <div className="mx-auto w-full max-w-screen-xl px-10 pb-4 lg:pt-10">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div href="/" className="block text-center">
                <div className="flex flex-col items-center mb-3">
                  <img src={LogoHmti} className="h-32 mb-3" alt="Logo HMTI" />
                  {/* <span className="text-2xl font-semibold whitespace-nowrap text-white">
        Logo HMTI
      </span> */}
                </div>
                <div className="text-white">
                  <span>
                    Himpunan Mahasiswa <br /> Teknik Informatika
                  </span>
                  <hr className="w-24 border-gray-300 sm:mx-auto  lg:my-2" />
                  <span>UNIVERSITAS KHAIRUN</span>
                </div>
                <div className="flex pt-8 sm:justify-center sm:mt-0">
                  <a href="/" className="text-white  hover:text-white ms-3">
                    <svg
                      className="w-7 h-7"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </a>

                  <a href="/" className="text-white  hover:text-white ms-3">
                    <svg
                      className="w-7 h-7"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>

                  <a
                    href="/"
                    className="text-white hover: hover:text-white ms-3"
                  >
                    <svg
                      className="w-7 h-7"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span className="sr-only">Discord community</span>
                  </a>

                  <a href="/" className="text-white  hover:text-white ms-3">
                    <svg
                      className="w-7 h-7"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Youtube</span>
                  </a>
                </div>
                <div className="text-white py-5">
                  <span>hmtiunkhairternate@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 md:w-2/4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  laman tautan
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Berita Terbaru
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Arsip Galeri
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Hasil Karya
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Organisasi
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Sejarah Singkat HMTI
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Visi & Misi
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Struktur Organisasi
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Events
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      IT EXPO
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      March Event
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Dies Natalis
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg h-48 md:w-72 mb-3 text-center">
                Map
              </div>
              <span className="text-white ">
                Jl. Jati Metro, Jati, Kec. <br /> Ternate Sel., Kota Ternate,{" "}
                <br />
                Maluku Utara
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex sm:items-center sm:justify-between mt-5">
            <span className="text-sm text-white sm:text-center ">
              Copyright ©{" "}
              <a href="/" className="hover:underline">
                2024 by HMTI UNKHAIR | Masa Periodisasi 2024-2025
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
