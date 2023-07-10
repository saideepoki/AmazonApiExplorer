import {baseUrl} from '../index.mjs'; // importing the baseUrl
import fetch from '../moduleConfig/fetch.js'; // importing configured instance of fetch
import {Product} from '../models/product.js';

// Get the product details
export const productId = async (req, res) => {
    // extracting productId property value from req.params
    const { productId } = req.params;
    // get response from scraper api using node-fetch
    try {
      // check if data already exists in database
      const existingData = await Product.findOne({ productId });
      if (existingData) {
        // if data already exists, return it
        res.json(existingData.product_information);
      } else {
        // if data doesn't exist, fetch it and insert it into the database
        const response = await fetch(`${baseUrl}&url=https://www.amazon.in/dp/${productId}`);
        const product_information = await response.json(); // fetching json data from response
        await Product.create({ productId,product_information});
        res.json(product_information);
      }
    } catch (error) {
      res.send(error);
    }
    // finally {
    //  await Product.deleteMany({});
    // }
  };
  