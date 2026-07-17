import React, { useEffect, useState } from "react";
import { getProducts } from "../Servies/services1";
import Loading from "../component_api/Loading1";
import Error from "../component_api/Error1";
import axios from "axios";

const Products1 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products1;