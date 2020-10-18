import styled from 'styled-components'
import { rem } from 'polished'
import { Link } from 'react-router-dom'

import { colors, fontSizes, sizes } from '../../theme/theme'

import { ReactComponent as arrowBackIcon } from '../../icon/arrowRight.svg'

export const GoBackWrapper = styled(Link)`
  display: flex;
  align-items: center;

  font-size: ${rem(fontSizes.small)};

  transition: all ease 0.5s;

  &:hover {
    color: ${colors.darkTurquoise};
  }

  margin-bottom: ${rem(sizes.small)};
`

export const BackIcon = styled(arrowBackIcon)`
  width: ${rem(sizes.mini)};
  height: ${rem(sizes.mini)};

  transform: rotate(180deg);

  path {
    fill: ${colors.middleTurquoise};
  }
`
