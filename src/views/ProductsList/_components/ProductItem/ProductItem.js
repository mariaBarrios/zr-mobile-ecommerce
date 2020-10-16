import React from 'react'

import {
  ProductItemContainer,
  ProductItemContent,
  ProductItemImageWrapper,
  ProductItemInfo,
  ProductItemSubInfo,
  ProductItemPrice
} from './ProductItem.styles'

import noImage from '../../../../ui/img/noImage.png'

export function ProductItem({ data }) {
  return (
    <ProductItemContainer>
      <ProductItemImageWrapper>
        <figure>
          <img
            src={data.imgUrl ? data.imgUrl : noImage}
            alt={data.model}
            target={data.model}
          />
        </figure>
      </ProductItemImageWrapper>
      <ProductItemContent>
        <ProductItemSubInfo>{data.brand}</ProductItemSubInfo>
        <ProductItemInfo>{data.model}</ProductItemInfo>
        <ProductItemPrice>
          {data.price ? `${data.price} €` : `--- €`}
        </ProductItemPrice>
      </ProductItemContent>
    </ProductItemContainer>
  )
}
