import { PrismaClient, Brand } from "@prisma/client";

const prisma = new PrismaClient()

export async function getBrands(): Brand[] {
  const brands = await prisma.brand.findMany()

  return brands;
}

export async function getBrandById(id: string): Brand {
  const brand = await prisma.brand.findFirst({
    where: {
      id: +id
    }
  })

  return brand
}

export async function addBrands(data: Partial<Brand>) {
  const {name} = data;

  const newBrand = prisma.brand.create({
    data: {
      name
    }
  })

  return newBrand
}

export async function deleteBrandById(id: string) {
  const deletedBrand = await prisma.brand.delete({
    where: {
      id: +id
    }
  })

  return deletedBrand
}

export async function updateBrandById(data: Partial<Brand>) {
  const {
    id,
    name,
  } = data

  const updatedBrand = await prisma.brand.update({
    where: {
      id: +id
    },
    data: {
      name: name || undefined,
    }
  })

  return updatedBrand
}