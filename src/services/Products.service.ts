import initialProducts from "../data/Product.data";
import { Product } from "../models/Product.model";

let products = [...initialProducts]

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product {
  const product = products.find(item => item.id === id)

  return product
}

export function addProduct(data: Partial<Product>) {
  const {name, price, brandId, image} = data;
  const newId = crypto.randomUUID()

  const newProduct: Product = {
    id: newId,
    name,
    price: +price,
    image,
    brandId,
    availableStock: 0
  }

  products.push(newProduct)

  return newProduct
}

export function deleteProductById(id: string) {
  const newProducts = products.filter(item => item.id !== id)
  products = newProducts

  return `Product with id: ${id} has deleted`
}

export function updatePriceById({id, price}: Partial<Product>) {
  const products = getProducts()
  const foundProduct: Product = products.find((item: Product) => item.id === id)

  foundProduct.price = +price

  return foundProduct
}