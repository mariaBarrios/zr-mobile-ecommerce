import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

import {
  HeaderContainer,
  ShoppingCartWrapper,
  ShoppingCartIcon,
  Logo,
  HeaderContent
} from './Header.styles'

import logoImg from '../../../ui/img/Mobile-ecommerce.jpg'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo src={logoImg} alt="Mobile Shop" target="Mobile Shop" />
        </Link>
        <ShoppingCartWrapper cartItems={cartItems}>
          <ShoppingCartIcon />
        </ShoppingCartWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}
