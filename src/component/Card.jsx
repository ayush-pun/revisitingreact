import React from "react";

const Card = ({product}) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold text-white">{product.title}</h2>

        <p className="text-sm leading-7 text-gray-400">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-white">
            ${product.price}
          </span>

          <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
            addtocart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;