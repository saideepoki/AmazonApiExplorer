import express from 'express';
import {home} from '../controllers/homeController.js'; // importin home controller to handle "/" route
import product from './product.js';
const router = express.Router();

console.log("Routes loaded");

router.get('/',home);
router.use('/product', product); // indicating it to go to "product.js" to handle "/products" path

export default router;

