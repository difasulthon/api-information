import { Hono } from "hono";

import { Brand, Brands } from "@prisma/client";

import { MESSAGE, ROUTES } from "../constants";
import { addBrands, deleteBrandById, getBrandById, getBrands, updateBrandById } from "../services/Brands.service";

const brand = new Hono();

brand.get(ROUTES.BRANDS, async (c) => {
  const brands = await getBrands();

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.GET_BRANDS,
    data: brands
  }, 200)
});

brand.get(ROUTES.BRAND, async (c) => {
  const id = c.req.param('id')
  const brand = await getBrandById(id)

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.GET_BRAND,
    data: brand
  }, 200)
})

brand.post(ROUTES.BRANDS, async (c) => {
  let body: Partial<Brands>
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<Partial<Brands>>()
  }

  const {name} = body
  const newBrand = await addBrands({name})

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.ADD_BRAND,
    data: newBrand
  }, 201)
})

brand.delete(ROUTES.BRAND, async (c) => {
  const {id} = c.req.param()
  const deletedBrand = await deleteBrandById(id)

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.DELETED_PRODUCT,
    data: deletedBrand
  })
})

brand.patch(ROUTES.BRAND, async (c) => {
  const id = c.req.param('id')
  let body: Partial<Brand>
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<Partial<Brand>>()
  }

  const {name} = body
  const updateBrand = await updateBrandById({id, name})

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.UPDATED_BRAND,
    data: updateBrand
  })
})

export { brand };