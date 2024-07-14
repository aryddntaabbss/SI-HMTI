import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim()) {
      window.scrollTo(0, 0);
      navigate(`/berita/cari/${searchInput}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div data-aos="fade-up" className="w-full relative pt-1">
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
  );
};

export default SearchForm;
