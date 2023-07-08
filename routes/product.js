import express from 'express';
import { productId } from '../controllers/productController.js';
import * as servicesController from '../controllers/servicesController.js'; // importing all service controllers
const router = express.Router();

// handles dynamic route /products/any_id to get the product details
router.get('/:productId',productId);
router.get('/:productId/reviews',servicesController.productReviews);
router.get('/:productId/offers',servicesController.productOffers);
//router.use('/:productId',services); 

export default router;