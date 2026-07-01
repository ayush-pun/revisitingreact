import React from 'react'

const Filter = ({handleFilter}) => {
  return (
    <div className="flex flex-wrap gap-3">
            <button
            onClick={()=>{handleFilter("All")}} 
            className="rounded-full bg-white px-5 py-2 text-black transition hover:bg-gray-200">
              All
            </button>

            <button
             onClick={()=>{handleFilter("Beach")}} 
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10">
              Beach
            </button>

            <button
             onClick={()=>{handleFilter("Mountains")}} 
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10">
              Mountains
            </button>

            <button
             onClick={()=>{handleFilter("City")}} 
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10">
              City
            </button>
          </div>
  )
}

export default Filter
