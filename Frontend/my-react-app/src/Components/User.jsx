import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { fetchProducts } from "../Redux/productSlice";
import { useNavigate } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, error } = useSelector((state) => state.products);

  console.log("Items", items);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("Dispatchiing");
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">User Panel</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-green-600 mb-4">
                  ₹{product.price}
                </p>
              </div>

              <button
                onClick={() => navigate(`/product/${product._id}`)}
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
