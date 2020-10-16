import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../../ui/theme/media'
import { colors, fontSizes, sizes } from '../../../ui/theme/theme'

export const PageTitle = styled.h1`
  margin-bottom: ${rem(sizes.large)};

  font-size: ${rem(fontSizes.large)};
  font-weight: 500;
  color: ${colors.middleTurquoise};

  text-transform: uppercase;
  text-align: center;

  ${media.desktop`
    margin-bottom: ${rem(sizes.xlarge)};
    font-size: ${rem(fontSizes.xlarge)};
  `}
`
