
export interface IProduct {
  name: string
  brand: string
  price: number
  category: 'writing' | 'office supplies' | 'art supplies'| 'Educational' | 'Technology'
  description: string
  quantity: number
  inStock: number
}



//  (string): The name of the product (e.g., Pen, Notebook, Eraser).
//  (string): The brand of the product (e.g., Pilot, Moleskine, Faber-Castell).
//  (number): Price of the product.
//  (string): The type of product, using an enum (e.g., Writing, Office Supplies). use enum, exact value (Writing, Office Supplies, Art Supplies, Educational, Technology)
// description (string): A brief description of the product.
// quantity (number): Quantity of the product available.
// inStock 