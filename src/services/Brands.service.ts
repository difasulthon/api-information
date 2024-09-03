import { PrismaClient, Brands } from "@prisma/client";

const prisma = new PrismaClient()

export async function addBrands(data: Partial<Brands>) {
  const {name} = data;

  const newBrand = prisma.brands.create({
    data: {
      name
    }
  })

  return newBrand
}