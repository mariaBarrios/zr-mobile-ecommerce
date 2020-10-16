import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../ui/theme/media'
import { colors, fontSizes, grid, sizes } from '../../ui/theme/theme'

export const ProductsDetailContainer = styled.section`
  display: grid;

  row-gap: ${rem(sizes.base)};
  align-items: stretch;
  justify-content: stretch;

  ${media.desktop`
    grid-template-columns: auto minmax(200px, 1fr);
    column-gap: ${rem(sizes.medium)};
    justify-content: flex-end;
  `}

  ${media.desktopLarge`
    column-gap: ${rem(sizes.large)};

    width: 80%;
    margin: 0 auto;
  `}
`

export const ProductDetailImageWrapper = styled.aside`
  display: flex;
  justify-content: center;

  ${media.desktop`
    justify-content: flex-end;
  `}
`

export const ProductDetailImg = styled.img`
  width: ${rem(250)};

  ${media.desktopLarge`
    width: ${rem(300)};
  `}
`
export const ProductDetailMainInfo = styled.div`
  margin-bottom: ${rem(sizes.base)};

  text-align: center;

  ${media.desktop`
    text-align: right;
  `}
`

export const ProductDetailInfo = styled.div`
  margin-bottom: ${rem(sizes.xtiny)};

  font-size: ${rem(fontSizes.large)};
  font-weight: 600;
  color: ${colors.darkTurquoise};

   ${media.desktop`
    font-size: ${rem(fontSizes.xlarge)};
  `}
`

export const ProductDetailSubinfo = styled.div`
  margin-bottom: ${rem(sizes.small)};

  font-size: ${rem(fontSizes.medium)};
  color: ${colors.middleGrey};

   ${media.desktop`
    font-size: ${rem(fontSizes.large)};
  `}
`

export const ProductDetailPrice = styled.div`
  font-size: ${rem(fontSizes.huge)};
  font-weight: 600;
  color: ${colors.magenta};
`

export const ProductDetailDescription = styled.div`
  margin-bottom: ${rem(sizes.medium)};
`

export const ProductsDetailItem = styled.div`
  padding-right: ${rem(grid.gap.mobile)};
  padding-top: ${rem(sizes.small)};
  padding-bottom: ${rem(sizes.small)};
  padding-left: ${rem(grid.gap.mobile)};

  margin-right: ${rem(-grid.gap.mobile)};
  margin-left: ${rem(-grid.gap.mobile)};

  border-bottom: 1px solid ${colors.lightGrey};

  font-size: ${sizes.small};
  color: ${colors.middleGrey};

  ${media.desktop`
    display: flex;
    justify-content: space-between;

    padding: ${rem(sizes.tiny)} 0;

    margin: 0;
  `}
`
export const ProductsDetaillItemLabel = styled.div`
  margin-right: ${rem(sizes.small)};

  ${media.onlyMobile`
    margin-bottom: ${rem(sizes.tiny)};
  `}
`

export const ProductsDetalailItemInfo = styled.div`
  font-weight: 700;

  ${media.desktop`
    text-align:right;
  `}
`

export const ProductDetailActions = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
