import { rem } from 'polished'
import { createGlobalStyle, css } from 'styled-components'
import { colors, sizes } from '../theme'

import { reboot } from './reboot'
import { reset } from './reset'

const scrollStyles = css`
  scroll-behavior: smooth;

  @supports (-webkit-overflow-scrolling: touch) {
    * {
      -webkit-overflow-scrolling: touch;
    }
  }
  @supports not (-webkit-overflow-scrolling: touch) {
    overflow: auto;

    ::-webkit-scrollbar {
      width: ${rem(sizes.xtiny)};
      border: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.middleTurquoise};
      border-radius: 0;
    }
  }
`

const globalStyles = css`
  ${scrollStyles};
`

export const GlobalStyles = createGlobalStyle`
${reset};
${reboot};
${globalStyles};
`
