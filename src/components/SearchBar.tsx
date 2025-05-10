import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex border border-gray-300 rounded-full px-3 py-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Tìm môn học..."
        className="outline-none font-roboto text-stone-600"
      />
      <button
        onClick={handleSearch}
        className=""
      >
        <MdSearch className="text-stone-600" />
      </button>
    </div>
  );
};

export default SearchBar;
