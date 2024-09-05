import { Hono } from "hono";

import { Product } from "@prisma/client";

import { ROUTES, MESSAGE } from '../constants';
import { 
  addProduct, deleteProductById, getProductById, getProducts, updatePriceById 
} from "../services/Products.service";

const product = new Hono();

product.get(ROUTES.PRODUCTS, async (c) => {
  const products = await getProducts();

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.GET_PRODUCTS,
    data: products
  }, 200)
});

product.get(ROUTES.PRODUCT, async (c) => {
  const id = c.req.param('id')
  const product = await getProductById(id)

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.GET_PRODUCT,
    data: product
  }, 200)
})

product.post(ROUTES.PRODUCTS, async (c) => {
  let body: Partial<Product>
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<Partial<Product>>()
  }

  const {name, price, image, brand_id} = body
  const newProduct = await addProduct({name, price, image, brand_id})

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.ADD_PRODUCT,
    data: newProduct
  }, 201)
})

product.delete(ROUTES.PRODUCT, async (c) => {
  const {id} = c.req.param()
  const deletedProduct = await deleteProductById(id)

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.DELETED_PRODUCT,
    data: deletedProduct
  })
})

product.patch(ROUTES.PRODUCT, async (c) => {
  const id = c.req.param('id')
  let body: Partial<Product>
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<Partial<Product>>()
  }

  const {price} = body
  const updatedProduct = await updatePriceById({id, price})

  return c.json({
    status: true,
    message: MESSAGE.SUCCESS.UPDATED_PRODUCT,
    data: updatedProduct
  })
})

export { product };