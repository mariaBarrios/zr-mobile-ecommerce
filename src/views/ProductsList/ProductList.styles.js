import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../ui/theme/media'
import { sizes } from '../../ui/theme/theme'

export const ProductsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: ${rem(sizes.base)};
  row-gap: ${rem(sizes.base)};
  align-items: stretch;

  margin-bottom: ${rem(sizes.base)};

  ${media.desktop`
  column-gap: ${rem(sizes.medium)};
  row-gap: ${rem(sizes.medium)};
  margin-bottom: ${rem(sizes.xlarge)};
`}
`
