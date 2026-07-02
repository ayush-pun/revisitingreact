import React from "react";
import { useParams } from "react-router-dom";
import products from "../dataset/Product";

const ProductDetails = () => {
  const { id } = useParams();   3

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="h-125 w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-5xl font-bold">
              {product.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-8">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Starting From
              </p>

              <h2 className="mt-2 text-5xl font-bold">
                ${product.price}
              </h2>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-2xl font-bold">
                  {product.duration}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Duration
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-2xl font-bold">
                  {product.hotel}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Hotel
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <h3 className="text-2xl font-bold">
                  {product.support}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Support
                </p>
              </div>
            </div>

            {/* Included */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold">
                What's Included
              </h2>

              <ul className="mt-5 space-y-3 text-gray-300">
                {product.includes.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200">
                Book Now
              </button>

              <button className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5">
                Save Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;