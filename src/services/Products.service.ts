import { PrismaClient, Products } from '@prisma/client'

const prisma = new PrismaClient()

import initialProducts from "../data/Product.data";
// import { Product } from "../models/Product.model";

let products = [...initialProducts]

export async function getProducts(): Products[] {
  const products = await prisma.products.findMany()

  return products;
}

export async function getProductById(id: string): Products {
  const product = await prisma.products.findFirst({
    where: {
      id: +id
    }
  })

  return product
}

export async function addProduct(data: Partial<Products>) {
  const {name, price, brand_id, image} = data;

  const newProduct = await prisma.products.create({
    data: {
      name,
      price: +price,
      image,
      brand_id: +brand_id,
      available_stock: 0
    }
  })

  return newProduct
}

export async function deleteProductById(id: string) {
  const deletedProduct = await prisma.products.delete({
    where: {
      id: +id
    }
  })

  return deletedProduct
}

export async function updatePriceById({id, price}: Partial<Products>) {
  // const products = getProducts()
  // const foundProduct: Products = products.find((item: Products) => item.id === id)

  // foundProduct.price = +price

  const updatedProduct = await prisma.products.update({
    where: {
      id: +id
    },
    data: {
      price: +price
    }
  })

  return updatedProduct
}