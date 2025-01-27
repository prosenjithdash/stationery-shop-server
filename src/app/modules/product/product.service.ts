import { IProduct } from "./product.interface";
import Product from "./product.model";


// For create Product
const createProductIntoDB = async (product: IProduct) => {
    
    const result = await Product.create(product);
    return result;
}


// For get all Products
const getAllProductsIntoDB = async () => {
    
    const result = await Product.find();
    return result;
}


// For get single Product
const getSingleProductIntoDB = async (_id:string) => {
    const result = await Product.findOne({_id});
    return result;
}


// For delete single Product
const deleteProductFromDB = async (_id:string) => {
    const result = await Product.updateOne({_id},{isDeleted:true});
    return result;
}
export const ProductServices = {
    createProductIntoDB,
    getAllProductsIntoDB,
    getSingleProductIntoDB,
    deleteProductFromDB
}