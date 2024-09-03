import { Hono } from "hono";

import { Brands } from "@prisma/client";

import { MESSAGE, ROUTES } from "../constants";
import { addBrands } from "../services/Brands.service";

const brand = new Hono();

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

export { brand };