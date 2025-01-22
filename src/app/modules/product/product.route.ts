import express from 'express'
import { ProductControllers } from './product.controller'

const router = express.Router()

// will call controller function

// For create product
router.post('/', ProductControllers.createProduct)
// For get all products
router.get('/', ProductControllers.getAllProducts)
// For get single product
router.get('/:productId', ProductControllers.getSingleProduct)

export const ProductRoutes = router;