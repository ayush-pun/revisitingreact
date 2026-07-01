import React from "react";

const Sort = ({handleSort}) => {
  return (
    <select
    onChange={(e)=>handleSort(e.target.value)} 
    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white outline-none">
      <option value="default" className="text-black">
        Default
      </option>

      <option value="lowToHigh" className="text-black">
        Price: Low to High
      </option>

      <option value="highToLow" className="text-black">
        Price: High to Low
      </option>
    </select>
  );
};

export default Sort;