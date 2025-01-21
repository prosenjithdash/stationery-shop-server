import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {

    try {
        const product = req.body;

    // will call service func to send this data
    const result = await ProductServices.createProductIntoDB(product) 
    
    // send response
    res.status(200).json({
        message: "Product created successfully",
        success: true,
        data: result

    })
    } catch (error) {
        console.log(error)
    }
    

 }

export const ProductControllers = {
     createProduct,
 }