import { css } from 'styled-components'
import { breakpoints } from './theme'

export const media = {
  onlyMobile: (...args) => css`
    @media (max-width: ${breakpoints.mobile}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${breakpoints.mobile + 1}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.tablet + 1}px) {
      ${css(...args)};
    }
  `,
  desktopLarge: (...args) => css`
    @media (min-width: ${breakpoints.desktop + 1}px) {
      ${css(...args)};
    }
  `
}
