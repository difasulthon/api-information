import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts(): Product[] {
  const products = await prisma.product.findMany()

  return products;
}

export async function getProductById(id: string): Product {
  const product = await prisma.product.findFirst({
    where: {
      id: +id
    }
  })

  return product
}

export async function addProduct(data: Partial<Product>) {
  const {name, price, brand_id, image} = data;

  const newProduct = await prisma.product.create({
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
  const deletedProduct = await prisma.product.delete({
    where: {
      id: +id
    }
  })

  return deletedProduct
}

export async function updateProductById(data: Partial<Product>) {
  const {
    id,
    name,
    image,
    price,
    available_stock,
    brand_id
  } = data

  const updatedProduct = await prisma.product.update({
    where: {
      id: +id
    },
    data: {
      name: name || undefined,
      price: price ? +price : undefined,
      image: image || undefined,
      available_stock: available_stock ? +available_stock : undefined,
      brand_id: brand_id ? +brand_id : undefined
    }
  })

  return updatedProduct
}