const ROUTES = {
  BASE: '/api',
  PRODUCTS: '/products',
  PRODUCT: '/product/:id',
  BRANDS: 'brands'
}

const MESSAGE = {
  ERROR: {
    NOT_FOUND: 'Not Found',
  },
  SUCCESS: {
    GET_PRODUCTS: 'Successfully get products',
    GET_PRODUCT: 'Successfully get product',
    ADD_PRODUCT: 'Successfully adding product',
    DELETED_PRODUCT: 'Successfully deleted product',
    UPDATED_PRODUCT: 'Successfully update product',
    ADD_BRAND: 'Successfully adding brand'
  }
}

export {
  ROUTES,
  MESSAGE
}