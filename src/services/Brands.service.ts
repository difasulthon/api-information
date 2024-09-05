import { PrismaClient, Brand } from "@prisma/client";

const prisma = new PrismaClient()

export async function addBrands(data: Partial<Brand>) {
  const {name} = data;

  const newBrand = prisma.brand.create({
    data: {
      name
    }
  })

  return newBrand
}