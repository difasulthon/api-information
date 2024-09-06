import { Hono } from 'hono'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui';
// import { cors } from "hono/middleware"

import { MESSAGE, ROUTES } from './constants';
import { product } from './routes/Product.route';
import { brand } from './routes/Brands.route';

const api = new OpenAPIHono({strict: false});

// api.use("/api/*", cors());

api.route(ROUTES.BASE, product);
api.route(ROUTES.BASE, brand);
api.notFound((c) => c.json({ message: MESSAGE.ERROR.NOT_FOUND }, 404));

api.doc('/doc', {
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'Shoes Product API',
    description: 'This is the REST API for football shoe',
  },
})
api.get(ROUTES.BASE, swaggerUI({ url: '/doc' }));

export default {
  port: 80,
  fetch: api.fetch
}
