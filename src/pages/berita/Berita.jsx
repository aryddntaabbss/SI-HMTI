import React, { useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { Link } from "react-router-dom";
import CardSemuaBerita from "../../components/CardSemuaBerita";
import { CiSearch } from "react-icons/ci";
import CardWithPic from "../../components/CardBeritaPilihan/CardWithPic";
import CardWithoutPic from "../../components/CardBeritaPilihan/CardWithoutPic";

const Berita = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    alert(searchInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <GuestLayout>
        <div className="flex flex-col-reverse w-full px-3 py-14 lg:p-16 lg:flex-row">
          <div className="w-full lg:w-2/3 px-3">
            <div className="relative w-full">
              <div className="overflow-x-auto whitespace-nowrap px-4 border-b-2 border-t-2 border-gray-400 py-3 scrollbar-hide">
                <nav className="flex gap-10">
                  <Link to={"#"} className="text-md pl-4 font-bold lg:text-xl">
                    Untuk Anda
                  </Link>
                  <Link to={"#"} className="text-md lg:text-xl">
                    Teknologi
                  </Link>
                  <Link to={"#"} className="text-md lg:text-xl">
                    Pendidikan
                  </Link>
                  <Link to={"#"} className="text-md lg:text-xl pr-6">
                    Olahraga
                  </Link>
                </nav>
              </div>
              <div className="absolute top-0 bottom-0 left-0 w-5 lg:w-12 pointer-events-none bg-gradient-to-r from-light-blue dark:from-dark-blue"></div>
              <div className="absolute top-0 bottom-0 right-0 w-5 lg:w-12 pointer-events-none bg-gradient-to-l from-light-blue dark:from-dark-blue"></div>
            </div>

            {/* card semua berita */}
            <div className="flex flex-col w-full gap-7 pt-9">
              <CardSemuaBerita />
              <CardSemuaBerita />
              <CardSemuaBerita />
              <CardSemuaBerita />
              <CardSemuaBerita />
              <CardSemuaBerita />
              <CardSemuaBerita />
              <CardSemuaBerita />
            </div>
            {/* card semua berita */}
          </div>
          <div className="w-full lg:w-2/6 px-3 mb-8 lg:mb-0">
            {/* search */}
            <div className="w-full relative pt-1">
              <input
                placeholder="Cari berita..."
                className="w-full rounded-full pl-4 outline-good-blue dark:outline-white dark:bg-bad-blue pr-14 py-3 shadow-md"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSearch}>
                <CiSearch className="absolute right-3 top-3 text-3xl hover:text-good-blue transition-all" />
              </button>
            </div>
            {/* search */}

            <h1 className="text-xl font-bold text-center w-full py-8">
              Berita Pilihan
            </h1>

            {/* card berita terpilih */}
            <div className="flex flex-col w-full gap-6">
              <CardWithPic />
              <CardWithoutPic />
              <CardWithoutPic />
              <CardWithoutPic />
            </div>
            {/* card berita terpilih */}
          </div>
        </div>
      </GuestLayout>
    </>
  );
};

export default Berita;
