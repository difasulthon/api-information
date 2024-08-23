import { Hono } from 'hono'
import { cors } from "hono/middleware"

import { ERROR_MESSAGE } from './constants';
import { product } from './routes/Product.routes'

const api = new Hono();

api.use("/api/*", cors());

api.route("/api", product);
api.notFound((c) => c.json({ message: ERROR_MESSAGE.NOT_FOUND }, 404));

export default api
