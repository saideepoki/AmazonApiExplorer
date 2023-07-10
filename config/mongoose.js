import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/amazon_api_database');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to database"));
db.once('open',() => console.log("Successfully connected to database"));

