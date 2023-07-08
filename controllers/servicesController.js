import {baseUrl} from '../index.mjs'; // importing the baseUrl
import fetch from '../moduleConfig/fetch.js'; // importing configured instance of fetch

// Get the product Reviews in detail
export const productReviews = async (req,res) => {
    // extracting productId property value from req.params
   const {productId} = req.params;
   // get response from scraper api using node-fetch
   try {
    // fetching the product details from url of the product using scraper api and node-fetch
    const response = await fetch(`${baseUrl}&url=https://www.amazon.in/product-reviews/${productId}`);
    const data = await response.json(); // fetching json data from response
    res.json(data);
   } catch (error) {
    res.send(error);
   }
};

// Get the product offer details
export const productOffers = async (req,res) => {
    // extracting productId property value from req.params
   const {productId} = req.params;
   // get response from scraper api using node-fetch
   try {
    // fetching the product details from url of the product using scraper api and node-fetch
    const response = await fetch(`${baseUrl}&url=https://www.amazon.in/gp/offer-listing/${productId}`);
    const data = await response.json(); // fetching json data from response
    res.json(data);
   } catch (error) {
    res.send(error);
   }
};