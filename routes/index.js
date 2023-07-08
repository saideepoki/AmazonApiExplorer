import express from 'express';
import {home} from '../controllers/homeController.js'; // importin home controller to handle "/" route
import product from './product.js';
import search from './search.js';
const router = express.Router();

console.log("Routes loaded");

router.get('/',home);
router.use('/product', product); // routing /product routes to 'product.js'
router.use('/search',search);
export default router;

