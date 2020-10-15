import React from 'react';

import { GlobalStyles } from './ui/theme/GlobalStyles/GlobalStyles'
import { ProductDetail } from './views/ProductDetail/Index';
import { ProductList } from './views/ProductsList/Index';

function App() {
  return (
    <>
    <GlobalStyles/>
    <div>
      Mobile-ecommerce
      <ProductList/>
      <ProductDetail/>
    </div>
    </>
  )
}

export default App;
