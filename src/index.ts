import { Hono } from 'hono'
// import { cors } from "hono/middleware"

import { ERROR_MESSAGE, ROUTES } from './constants';
import { product } from './routes/Product.route'

const api = new Hono();

// api.use("/api/*", cors());

api.route(ROUTES.BASE, product);
api.notFound((c) => c.json({ message: ERROR_MESSAGE.NOT_FOUND }, 404));

export default api
