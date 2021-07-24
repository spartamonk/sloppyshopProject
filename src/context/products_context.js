import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'

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

const initialState = {
  isSidebarOpen: false,
  product_isLoading: false,
  product_error: false,
  products: [],
  featured_products: [],
  singleProduct_isLoading: false,
  singleProduct_isError: false,
  singleProduct: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    const response = await axios(url).catch((error) => console.log(error))
    if (response) {
      const { data } = response
      const featuredProducts = data.filter((item) => {
        const { featured } = item
        return featured === true
      })

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { products: data, featured: featuredProducts },
      })
    } else {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }
  const fetchSingleProduct = async(urlParams) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
   const response = await axios(urlParams).catch(error=>console.log(error))
   if(response){
    const {data} = response;
    dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: data})
   }
   else {
     dispatch({type: GET_SINGLE_PRODUCT_ERROR})
   }
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
