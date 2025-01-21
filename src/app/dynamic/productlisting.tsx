
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  stockStatus: string;
};

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from an API
    fetch("https://next-ecommerce-template-4.vercel.app/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md p-4 hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p
            className={`mt-1 ${
              product.stockStatus === "In Stock"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {product.stockStatus}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;