import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/product/product.route'

const app: Application = express()



// parsers
app.use(express.json())
app.use(cors())

// application routes

// For create Product
app.use('/api/products', ProductRoutes)

// For get all Products
app.use('/api/products',ProductRoutes)



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;
