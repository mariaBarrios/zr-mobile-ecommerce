import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../../ui/theme/media'
import { grid } from '../../../ui/theme/theme'

export const Container = styled.main`
  max-width: ${rem(grid.contentMaxWidth)};
  height: 100%;

  padding-top: ${rem(120)}; /*Tamaño que ocupa el header*/
  padding-right: ${rem(grid.gap.mobile)};
  padding-left: ${rem(grid.gap.mobile)};

  margin: 0 auto;

  ${media.desktop`
    padding-top: ${rem(135)};/*Tamaño que ocupa el header*/
    padding-right: ${rem(grid.gap.desktop)};
    padding-left: ${rem(grid.gap.desktop)};
  `}
`
