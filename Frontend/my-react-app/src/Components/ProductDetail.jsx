import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../Redux/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProduct, loading, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Details</h1>
      <img
        src={singleProduct?.image}
        alt={singleProduct?.name}
        className=" w-48 h-48 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-4">{singleProduct?.name}</h1>

      <p className="text-lg text-green-600 font-semibold mb-2">
        ₹{singleProduct?.price}
      </p>

      <p className="text-gray-700 mb-3">{singleProduct?.description}</p>

      <p className="text-sm text-gray-500">
        Category: {singleProduct?.category}
      </p>
    </div>
  );
};

export default ProductDetail;
