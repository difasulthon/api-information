import { Hono } from "hono";

import { ROUTES } from '../constants';
import { getProductById, getProducts, updatePriceById } from "../controllers/Products.controllers";
import { Product } from "../types/Product.types";

const product = new Hono();

product.get(ROUTES.PRODUCTS, (c) => {
  const products = getProducts();

  return c.json(products, 200);
});

product.get(ROUTES.PRODUCT, (c) => {
  const id = c.req.param('id')
  const product = getProductById(id)

  return c.json(product, 200)
})

product.post(ROUTES.PRODUCTS, async (c) => {
  let body: Partial<Product>
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<Partial<Product>>()
  }

  const {name, price, image, brandId} = body
  const newProduct = addUser({name, price, image, brandId})

  return c.json(newProduct, 201)
})

product.delete(ROUTES.PRODUCT, (c) => {
  const {id} = c.req.param()
  const deleteProduct = deleteProductById(+id)

  return c.text(deleteProduct)
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
  const updatedProduct= updatePriceById({id: id, price})

  return c.json(updatedProduct)
})

export { product };