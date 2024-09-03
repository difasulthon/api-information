import { Hono } from 'hono'
// import { cors } from "hono/middleware"

import { MESSAGE, ROUTES } from './constants';
import { product } from './routes/Product.route';
import { brand } from './routes/Brands.route';

const api = new Hono();

// api.use("/api/*", cors());

api.route(ROUTES.BASE, product);
api.route(ROUTES.BASE, brand);
api.notFound((c) => c.json({ message: MESSAGE.ERROR.NOT_FOUND }, 404));

export default {
  port: 80,
  fetch: api.fetch
}
