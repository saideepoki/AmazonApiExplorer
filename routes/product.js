import express from 'express';
import { productId } from '../controllers/productController.js';
const router = express.Router();

// handles dynamic route /products/any_id to get the product details
router.get('/:productId',productId);


export default router;