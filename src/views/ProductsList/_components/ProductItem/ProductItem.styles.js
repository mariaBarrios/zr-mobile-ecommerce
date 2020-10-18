import styled from 'styled-components'
import { rem } from 'polished'

import { colors, fontSizes, sizes } from '../../../../ui/theme/theme'

export const ProductItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  padding: ${rem(sizes.base)};

  transition: all ease 0.5s;

  &:hover {
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 ${rem(sizes.medium)} ${rem(sizes.mini)} ${colors.lightGrey};
    transform: scale(1.06);
  }
`

export const ProductItemImageWrapper = styled.aside`
  margin-bottom: ${rem(sizes.mini)};
`

export const ProductItemContent = styled.section`
  text-align: center;
`

export const ProductItemInfo = styled.div`
  margin-bottom: ${rem(sizes.tiny)};

  font-size: ${rem(fontSizes.medium)};
  font-weight: 600;
  color: ${colors.darkTurquoise};
`

export const ProductItemSubInfo = styled.div`
  margin-bottom: ${rem(sizes.mini)};

  font-size: ${rem(fontSizes.base)};
  color: ${colors.middleGrey};
`

export const ProductItemPrice = styled.div`
  font-size: ${rem(fontSizes.xlarge)};
  font-weight: 600;
  color: ${colors.magenta};
`
