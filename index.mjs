import express from 'express';
import router from './routes/index.js'; // importing all the routes

// API application
const app = express();
const PORT = process.env.PORT || 8000;
const apiKey = "f28d6e74c69c1ded336df61bd2cb39f9"; // API key provided to authenticate my API's request to the Scraper API service
// accessing services from scrapeAPi using our API key and enablin autparse to automatically parse the data in structured format
export const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// middlewares
app.use(express.json()); // parses json input
app.use('/',router); // All routes starting from "/" will be handled by router i.e ./routes/index.js


app.listen(PORT, (err) => {
    if(err) {
        console.log("Error in running the server");
        return;
    }
    console.log(`Server is running on port: ${PORT}`);
});


// exporting baseUrl
// export default baseUrl;


