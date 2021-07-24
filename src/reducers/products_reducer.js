import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
    }
  }
  if(action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    }
  }
if(action.type === GET_PRODUCTS_BEGIN) {
  return {
    ...state,
    product_isLoading: true,
  }
}
if (action.type === GET_PRODUCTS_SUCCESS) {
  return {
    ...state,
    product_isLoading: false,
    products: action.payload.products,
    featured_products: action.payload.featured,
  }
}
if(action.type === GET_PRODUCTS_ERROR) {
  return {
    ...state,
    product_isLoading: false,
    product_error: true
  }
}
if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
  return {
    ...state,
    singleProduct_isLoading: true,
    singleProduct_isError: false,
  }
}
if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
  return {
    ...state,
    singleProduct_isLoading: false,
    singleProduct: action.payload
  }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR){
    return {
      ...state,
      singleProduct_isLoading: false,
      singleProduct_isError: true,
    }
  }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
