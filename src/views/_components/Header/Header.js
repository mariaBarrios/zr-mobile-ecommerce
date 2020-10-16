import React from 'react'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  ShoppingCartWrapper,
  ShoppingCartIcon,
  Logo,
  HeaderContent
} from './Header.styles'

import logoImg from '../../../ui/img/Mobile-ecommerce.jpg'

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
      <Link to="/">
        <Logo src={logoImg} alt="Mobile Shop" target="Mobile Shop" />
      </Link>
      <ShoppingCartWrapper>
        <ShoppingCartIcon />
      </ShoppingCartWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}
