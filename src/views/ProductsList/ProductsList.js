import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { getProductsList } from '../../core/Products.service'

import { PageTitle } from '../_components/PageTitle/PageTitle'
import { ProductItem } from './_components/ProductItem/ProductItem'
import { ProductsListContainer } from './ProductList.styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {
  IconSearch,
  InputSearchInput,
  InputSearchWrapper
} from './_components/InputSearch/InputSearch.styles'

export function ProductsList() {
  const { isLoading, isError, error, data: ProductList } = useQuery(
    'ProductsItems',
    getProductsList
  )
  const [searchValue, setValue] = useState('')

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
        <InputSearchWrapper>
          <InputSearchInput
            type="text"
            placeholder="Encuentra lo que buscas"
            value={searchValue}
            onChange={e => {setValue(e.target.value)}}
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'Encuentra lo que buscas') }
          />
          <IconSearch />
        </InputSearchWrapper>
      </section>

      <ProductsListContainer>

        {filterbySearchParameter(ProductList, searchValue).map(productItem => (
          <Link to={`/${productItem.id}`} key={productItem.id}>
            <ProductItem key={productItem.index} data={productItem} />
          </Link>
        ))}
      </ProductsListContainer>
    </>
  )
}

function filterbySearchParameter(productList, searchValue) {
  if (!searchValue) {
    return productList
  }

  return productList.filter(
    item => item.brand.includes(searchValue) || item.model.includes(searchValue)
  )

}
