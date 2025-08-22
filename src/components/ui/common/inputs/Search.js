import React from "react";

const Search = ({ placeholder }) => {
  return (
    <input
      className="form-input w-full pl-5 text-slate-800 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
      placeholder={placeholder}
    />
  );
};

export default Search;
