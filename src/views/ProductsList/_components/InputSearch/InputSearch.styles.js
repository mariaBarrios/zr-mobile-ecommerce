import { rem } from 'polished'
import styled from 'styled-components'
import { media } from '../../../../ui/theme/media'
import { colors, sizes } from '../../../../ui/theme/theme'

import { ReactComponent as Search } from '../../../../ui/icon/search.svg'

export const InputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  padding: ${rem(sizes.mini)} ${rem(sizes.tiny)};
  margin-bottom: ${rem(sizes.medium)};

  border-bottom: 1px solid ${colors.lightGrey};

  ${media.tablet`
    width: ${rem(500)};
    margin: 0 auto;
    margin-bottom: ${rem(sizes.large)};

 `}
`

export const InputSearchInput = styled.input`
  width: 100%;

  background: transparent;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;

  letter-spacing: 2px;
  text-transform: uppercase;

  cursor: pointer;

  &:focus {
    cursor: auto;
  }

  &::placeholder {
    color: ${colors.DarkGrey};
    opacity: 0.6;
  }
`

export const IconSearch = styled(Search)`
  width: ${rem(sizes.base)};
  height: ${rem(sizes.base)};
`
