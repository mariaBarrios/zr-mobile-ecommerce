import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { getProductDetail } from '../../core/Products.service'
import { PageTitle } from '../_components/PageTitle/PageTitle'

import noImage from '../../ui/img/noImage.png'
import {
  ProductDetailActions,
  ProductDetailDescription,
  ProductDetailImageWrapper,
  ProductDetailImg,
  ProductsDetailContainer,
  ProductsDetailItem,
  ProductDetailMainInfo,
  ProductDetailPrice,
  ProductDetailInfo,
  ProductDetailSubinfo,
  ProductsDetalailItemInfo,
  ProductsDetaillItemLabel
} from './ProductDetail.styles'

import { AddToCart } from './_components/AddToCart'

export function ProductDetail() {
  const { productId } = useParams()
  const { isLoading, isError, error, data: productItemDetail } = useQuery(
    ['productItemDetail', productId],
    () => getProductDetail(productId)
  )

  if (isLoading) {
    return <span> Cargando...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <section>
        <PageTitle>Echa un vistazo más en detalle</PageTitle>
      </section>

      <ProductsDetailContainer>
        <ProductDetailImageWrapper>
          <figure>
            <ProductDetailImg
              src={
                productItemDetail.imgUrl ? productItemDetail.imgUrl : noImage
              }
              alt={productItemDetail.model}
              target={productItemDetail.model}
            />
          </figure>
        </ProductDetailImageWrapper>
        <section>
          <ProductDetailMainInfo>
            <ProductDetailInfo>{productItemDetail.model}</ProductDetailInfo>
            <ProductDetailSubinfo>
              {productItemDetail.brand}
            </ProductDetailSubinfo>
            <ProductDetailPrice>
              {productItemDetail.price
                ? `${productItemDetail.price}€`
                : '---€'}
            </ProductDetailPrice>
          </ProductDetailMainInfo>
          <ProductDetailDescription>
            {setDataEstructure(productItemDetail).map(
              dataDetail =>
                dataDetail.info && (
                  <ProductsDetailItem>
                    <ProductsDetaillItemLabel>{dataDetail.label}</ProductsDetaillItemLabel>
                    <ProductsDetalailItemInfo>{dataDetail.info}</ProductsDetalailItemInfo>
                  </ProductsDetailItem>
                )
            )}
          </ProductDetailDescription>
          <ProductDetailActions>
            <AddToCart storages={productItemDetail.options.storages}
            colors={productItemDetail.options.colors}
            productId={productId}/>
{/*   "options": {
     "colors": [{ "code": 1000, "name": "Black" }],
     "storages": [
       { "code": 2000, "name": "16 GB" },
       { "code": 2001, "name": "32 GB" }
    ]
   } */}

          </ProductDetailActions>
        </section>
      </ProductsDetailContainer>
    </>
  )
}

function setDataEstructure(productItemDetail) {
  const dataDetail = [
    { label: 'Sistema Operativo', info: productItemDetail.os },
    { label: 'CPU', info: productItemDetail.cpu },
    { label: 'RAM', info: productItemDetail.ram },
    {
      label: 'Resolución',
      info: productItemDetail.displayResolution
    },
    {
      label: 'Camara trasera',
      info: productItemDetail.primaryCamera
    },
    {
      label: 'Camara frontal',
      info: productItemDetail.secondaryCmera
    },
    { label: 'Batería', info: productItemDetail.battery },

    { label: 'Dimensiones', info: productItemDetail.dimentions },
    { label: 'Weight', info: `${productItemDetail.weight} gr` }
  ]

  return dataDetail
}


