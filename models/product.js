import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    product_information: {
        type: Object,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

export {Product};
