import { Request, Response } from "express";
import { ProductServices } from "./product.service";


// Create Product
const createProduct = async (req: Request, res: Response) => {

    try {
        const { product: productData } = req.body;

    // will call service func to send this data
    const result = await ProductServices.createProductIntoDB(productData) 
    
    // send response
    res.status(200).json({
        message: "Product created successfully",
        success: true,
        data: result

    })
    } catch (error) {
         res.status(500).json({
        message: "Something went wrong.",
        success: false,
        error: error

    })
    }
    

}
 
// Get all products
const getAllProducts = async (req: Request, res: Response) => {

    try {

    // will call service func to send this data
        const result = await ProductServices.getAllProductsIntoDB();
    
    // send response
    res.status(200).json({
        message: "Products retrieved successfully",
        success: true,
        data: result

    })
    } catch (error) {
         res.status(500).json({
        message: "Something went wrong.",
        success: false,
        error: error

    })
    }
    

 }

 
 // Get single products
const getSingleProduct = async (req: Request, res: Response) => {

    try {

        const { productId } = req.params;
    // will call service func to send this data
        const result = await ProductServices.getSingleProductIntoDB(productId);
    
    // send response
    res.status(200).json({
        message: "Products retrieved successfully",
        success: true,
        data: result

    })
    } catch (error) {
         res.status(500).json({
        message: "Something went wrong.",
        success: false,
        error: error

    })
    }
    

 }

  
 // delete products
const deleteProduct = async (req: Request, res: Response) => {

    try {

        const { productId } = req.params;
    // will call service func to send this data
        const result = await ProductServices.deleteProductFromDB(productId);
    
    // send response
    res.status(200).json({
        message: "Product deleted successfully",
        success: true,
        data: result

    })
    } catch (error) {
         res.status(500).json({
        message: "Something went wrong.",
        success: false,
        error: error

    })
    }
    

 }

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct
 }