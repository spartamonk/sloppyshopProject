import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price)
    maxPrice = Math.max(...maxPrice)

    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    }
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    }
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
    }
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }
  if (action.type === UPDATE_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        ...action.payload,
      },
    }
  }
  if (action.type === FILTER_PRODUCTS) {
    const {
      filters: { text, category, company, color, price, shipping },
      all_products,
    } = state
    let tempProducts = [...all_products]
    if(text) {
     tempProducts= tempProducts.filter(products=> products.name.includes(text.toLowerCase()))
    }
    if(category !== 'all') {
      tempProducts= tempProducts.filter(products=> products.category === category)
    }
    if(company !== 'all') {
      tempProducts = tempProducts.filter(products=> products.company === company)
    }
    if(color !== 'all') {
      tempProducts= tempProducts.filter(products=> products.colors.find(item=> item === color))
    }
   tempProducts = tempProducts.filter(products=> products.price <= price)
   if(shipping) {
     tempProducts= tempProducts.filter(products=> products.shipping === true)
   }
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }
  if(action.type === CLEAR_FILTERS){
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
