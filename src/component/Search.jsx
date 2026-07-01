import React from "react";

const Search = ({search, setSearch}) => {
  return (
    <div className="flex w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
      <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        type="text"
        placeholder="Search destination..."
        className="flex-1 bg-transparent px-5 py-3 text-white placeholder-gray-500 outline-none"
      />

      
    </div>
  );
};

export default Search;