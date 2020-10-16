import React from 'react'
import { useQuery } from 'react-query'

import { getProductsList } from '../../core/Products.service'

import { PageTitle } from '../_components/PageTitle/PageTitle'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { ProductsListContainer } from './ProductList.styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function ProductsList() {
  const { isLoading, isError, error, data: ProductList } = useQuery(
    'ProductsItems',
    getProductsList
  )

  if (isLoading) {
    return <span>Cargando...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <section>
        <PageTitle>Consulta nuestro catálogo de móviles</PageTitle>
      </section>

      <ProductsListContainer>
        {ProductList?.map(productItem => (
          <Link to={`/${productItem.id}`} key={productItem.id}>
            <ProductItem key={productItem.index} data={productItem} />
          </Link>
        ))}
      </ProductsListContainer>
    </>
  )
}

