import { rem } from 'polished'
import styled, { css } from 'styled-components'
import { colors, fontSizes, sizes } from '../../../../ui/theme/theme'

export const Select = styled.select`
  width: 100%;

  padding-top: ${rem(sizes.small)};
  padding-bottom: ${rem(sizes.small)};

  background-color: white;
  border: 0;
  border-bottom: 1px solid ${colors.lightGrey};

  font-family: inherit;
  font-size: ${rem(fontSizes.base)};
  letter-spacing: 2px;
  color: ${colors.middleGrey};
  text-transform: uppercase;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: ${rem(sizes.mini)} ${rem(sizes.base)};

  border: 2px solid ${colors.middleTurquoise};
  background-color: ${colors.middleTurquoise};

  font-size: ${rem(fontSizes.base)};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${colors.white};

  opacity: ${p => p.disabled && 0.3};

  ${p =>
    !p.disabled &&
    css`
      cursor: pointer;

      &:hover {
        border: 2px solid ${colors.lightTurquoise};
        background-color: ${colors.lightTurquoise};
      }
    `}
`

export const ErrorMessage = styled.div`
  margin-top: ${rem(sizes.small)};

  font-size: ${rem(fontSizes.small)};
  color: ${colors.error};
`
