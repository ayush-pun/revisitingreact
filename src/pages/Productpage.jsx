import React, { useState } from "react";
import Card from "../component/Card";
import products from "../dataset/Product";
import Search from "../component/Search";
import Filter from "../component/Filter";
import Sort from "../component/Sorting";
import { useSearchParams } from "react-router-dom";

const Product = () => {



    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category") || "All";
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "default";

    let filteredItems = [...products];



    function handleSort(value) {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);

            if (value === "default") {
                params.delete("sort");
            } else {
                params.set("sort", value);
            }
            return params;
        })
    }

    if (sort === "lowToHigh") {
        filteredItems.sort((a, b) => a.price - b.price);
    }

    if (sort === "highToLow") {
        filteredItems.sort((a, b) => b.price - a.price);
    }



    function handleSearch(value) {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);

            if (value) {
                params.set("search", value);
            } else {
                params.delete("search");
            }

            return params;
        });
    }

    if (search) {
        filteredItems = filteredItems.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
    }



    function handleFilter(value) {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);

            if (value === "All") {
                params.delete("category");
            } else {
                params.set("category", value);
            }

            return params;
        });
    }


    if (category !== "All") {
        filteredItems = filteredItems.filter(
            (item) => item.category === category
        );
    }



    return (
        <section className="min-h-screen bg-neutral-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
                        Discover
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        Explore Our Collection
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Find your next destination from our carefully curated collection of
                        unforgettable travel experiences.
                    </p>
                </div>


                <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <Search search={search} handleSearch={handleSearch} />
                    </div>
                    <div>
                        <Filter handleFilter={handleFilter} />
                    </div>
                    <div>
                        <Sort
                            sort={sort}
                            handleSort={handleSort}
                        />
                    </div>

                </div>

                {/* Products Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        filteredItems.map((product) => (
                            <Card key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Product;