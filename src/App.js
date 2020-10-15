import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyles } from './ui/theme/GlobalStyles/GlobalStyles'
import { ProductDetail } from './views/ProductDetail'
import { ProductsList } from './views/ProductsList'


function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <div>Mobile-ecommerce</div>
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </Router>
    </>
  )
}

export default App
