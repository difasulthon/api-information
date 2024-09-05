const ROUTES = {
  BASE: '/api',
  PRODUCTS: '/products',
  PRODUCT: '/product/:id',
  BRANDS: 'brands',
  BRAND: 'brands/:id'
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
    ADD_BRAND: 'Successfully adding brand',
    GET_BRANDS: 'Successfully get brands',
    GET_BRAND: 'Successfully get brand',
    DELETED_BRAND: 'Successfully deleted brand',
    UPDATED_BRAND: 'Successfully update brand'
  }
}

export {
  ROUTES,
  MESSAGE
}