import { Product_model } from "../Models/Product_model.js";

export const createProduct = async (req, res) => {
    const { name, description, category, price, image } = req.body;

    try {
        const newProduct = new Product_model({ name, description, category, price, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product_model.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product_model.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, image } = req.body;

    try {
        const product = await Product_model.findByIdAndUpdate(id, { name, description, category, price, image }, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product_model.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

