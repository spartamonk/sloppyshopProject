import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  AuthWrapper,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route exact path='/products/:id'>
            <SingleProductPage></SingleProductPage>
          </Route>
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  )
}

export default App
