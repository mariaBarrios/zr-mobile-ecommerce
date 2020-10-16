import styled from 'styled-components'
import { rem } from 'polished'

import { colors, fontSizes, grid, sizes } from '../../../ui/theme/theme'

import { ReactComponent as CartIcon } from '../../../ui/icon/Cart.svg'
import { media } from '../../../ui/theme/media'

export const HeaderContainer = styled.header`
  position: fixed;
  top:0;
  right:0;
  left:0;

  padding: ${rem(sizes.small)} 0;
  background-color: ${colors.white};

  box-shadow: 0px ${rem(sizes.mini)} ${rem(sizes.medium)} 0px ${colors.lightGrey};
  z-index:1;

  ${media.desktop`
    padding: ${rem(sizes.mini)} 0;
  `}
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${rem(grid.contentMaxWidth)};
  padding: 0 ${rem(grid.gap.mobile)};
  margin: 0 auto;

  ${media.desktop`
    padding: 0 ${rem(grid.gap.desktop)};
  `}

`

export const Logo = styled.img`
  height: ${rem(50)};
`

export const ShoppingCartWrapper = styled.div`
  position: relative;

  margin-right: ${rem(sizes.xtiny)};

  &:before {
    content: '1';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: 0;
    right: ${rem(-sizes.xtiny)};

    width: ${rem(sizes.mini)};
    height: ${rem(sizes.mini)};

    background-color: ${colors.middleTurquoise};
    border-radius: 100%;

    color: ${colors.white};
    font-size: ${fontSizes.small};
  }

  transition: all ease 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

export const ShoppingCartIcon = styled(CartIcon)`
  width: ${rem(sizes.medium)};
  height: ${rem(sizes.medium)};
`
