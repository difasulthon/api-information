import Products from "../models/Product.models";
import { Product } from "../types/Product.types";

export function getProducts(): Product[] {
  return Products;
}

export function getProductById(id: string): Product {
  const product = Products.find(item => item.id === id)

  return product
}

export function addProduct(data: Partial<Product>) {
  const {name, price, brandId, image} = data;
  const newId = crypto.randomUUID()

  const newProduct: Product = {
    id: newId,
    name,
    price,
    image,
    brandId,
    availableStock: 0
  }

  Products.push(newProduct)

  return newProduct
}

export function deleteProductById(id: string) {
  const products = Products.filter(item => item.id !== id)
  Products = users

  return `Product with id: ${id} has deleted`
}

export function updatePriceById({id, price}: Partial<Product>) {
  const products = getProducts()
  const foundProduct: Product = users.find((item: Product) => item.id === id)

  foundProduct.price = price

  return foundProduct
}