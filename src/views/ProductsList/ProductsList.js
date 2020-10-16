import React from 'react'

import { PageTitle } from '../_components/PageTitle/PageTitle'

import { ProductsListContainer } from './ProductList.styles'
import { ProductItem } from './_components/ProductItem/ProductItem'

export function ProductsList() {

  let data = {
    brand: "Xiaomi",
    model: "Mii 500",
    price: "150",
  }

  return (
    <>
      <PageTitle>Lista de productos</PageTitle>
      <ProductsListContainer>
        <ProductItem data={data}></ProductItem>
      </ProductsListContainer>
    </>
  )
}
