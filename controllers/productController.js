import {baseUrl} from '../index.mjs'; // importing the baseUrl
import fetch from 'node-fetch';

// Get the product details
export const productId = async (req,res) => {
    // extracting productId property value from req.params
   const {productId} = req.params;
   // get response from scraper api using node-fetch
   try {
    // fetching the product details from url of the product using scraper api and node-fetch
    const response = await fetch(`${baseUrl}&url=https://www.amazon.in/dp/${productId}`);
    const data = await response.json(); // fetching json data from response
    res.json(data);
   } catch (error) {
    res.send(error);
   }
};