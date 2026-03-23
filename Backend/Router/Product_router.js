import express from 'express';
import { createProduct,getProducts, getProductById, updateProductById, deleteProductById } from '../Controller/product_controller.js';


const router = express.Router();

router.post('/add', createProduct);
router.get('/all', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;