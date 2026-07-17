function ProductCard({ product }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Category */}
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="text-right">
            <p className="text-yellow-500 font-semibold">
              ⭐ {product.rating.rate}
            </p>
            <p className="text-xs text-gray-500">
              {product.rating.count} reviews
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;