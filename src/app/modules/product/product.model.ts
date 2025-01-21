
import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

//   name: string
//   brand: string
//   price: number
//   category: 'writing' | 'office supplies' | 'art supplies'| 'Educational' | 'Technology'
//   description: string
//   quantity: number
//   inStock: number
  
 const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
     type: String,
      enum: ['Writing' , 'Office Supplies' ,'Art Supplies', 'Educational' , 'Technology'],
    //   default: 'writing',
  },
  description: {
    type: String,
    required: true,
  },
   quantity: {
    type: Number,
    required: true,
    },
    inStock: {
    type: Number,
    required: true,
  },
})

// StaticRange, instance

// tourSchema.methods.getNextNearestStartDateAndEndData = function () {
//   const today = new Date()

//   const futureDates = this.startDates.filter((startDate: Date) => {
//     return startDate > today
//   })

//   futureDates.sort((a: Date, b: Date) => a.getTime() - b.getDate())

//   const nearestStartDate = futureDates[0]
//   const estimatedEndDate = new Date(
//     nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
//   )

//   return {
//     nearestStartDate,
//     estimatedEndDate,
//   }
// }

// productSchema.static(
//   'getNextNearestStartDateAndEndData',
//   function getNextNearestStartDateAndEndData() {
//     const today = new Date()

//     const futureDates = this.startDates.filter((startDate: Date) => {
//       return startDate > today
//     })

//     futureDates.sort((a: Date, b: Date) => a.getTime() - b.getDate())

//     const nearestStartDate = futureDates[0]
//     const estimatedEndDate = new Date(
//       nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
//     )

//     return {
//       nearestStartDate,
//       estimatedEndDate,
//     }
//   }
// )

const Product = model<IProduct>('Product', productSchema)

export default Product
