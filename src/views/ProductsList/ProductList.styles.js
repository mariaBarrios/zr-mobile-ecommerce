import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../ui/theme/media'
import { sizes } from '../../ui/theme/theme'

export const ProductsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1);
  column-gap: ${rem(sizes.base)};
  row-gap: ${rem(sizes.base)};
  align-items: stretch;

  margin-bottom: ${rem(sizes.base)};

  ${media.tablet`
  grid-template-columns: repeat(2, minmax(200px, 1fr));
`}

  ${media.desktop`
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  column-gap: ${rem(sizes.medium)};
  row-gap: ${rem(sizes.medium)};
  margin-bottom: ${rem(sizes.xlarge)};
`}

${media.desktopLarge`
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  margin-bottom: ${rem(sizes.xlarge)};
`}
`
