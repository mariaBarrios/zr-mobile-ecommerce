import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyles } from './ui/theme/GlobalStyles/GlobalStyles'

import { Header } from './views/_components/Header/Header'
import { Container } from './views/_components/Container/Container.styles'
import { ProductDetail } from './views/ProductDetail'
import { ProductsList } from './views/ProductsList'
import { CartProvider } from './views/_components/CartContext'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <CartProvider>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
        </Container>
      </CartProvider>
    </Router>
  )
}

export default App
