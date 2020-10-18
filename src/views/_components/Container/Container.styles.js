import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../../ui/theme/media'
import { grid, sizes } from '../../../ui/theme/theme'

export const Container = styled.main`
  max-width: ${rem(grid.contentMaxWidth)};

  padding-right: ${rem(grid.gap.mobile)};
  padding-left: ${rem(grid.gap.mobile)};

  margin: 0 auto;
  margin-top: ${rem(120)}; /*Tamaño que ocupa el header*/
  margin-bottom: ${rem(sizes.xlarge)};

  ${media.desktop`
    padding-right: ${rem(grid.gap.desktop)};
    padding-left: ${rem(grid.gap.desktop)};
    margin-top: ${rem(150)};/*Tamaño que ocupa el header*/
    margin-bottom: ${rem(sizes.large)};
  `}
`
