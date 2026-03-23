import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "../Redux/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((item) => item._id === id),
  );
  useEffect(() => {
    if (product) {
      setName(product.name);
      setCategory(product.category);
      setImage(product.image);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product]);

  const handleForm = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ id, name, category, image, price, description });
    dispatch(
      editProduct({
        productId: id,
        productData: { name, category, image, price, description },
      }),
    );
    navigate("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Product Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              placeholder="Product Category"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="Product Image URL"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="Product Price"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Product Description"
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
