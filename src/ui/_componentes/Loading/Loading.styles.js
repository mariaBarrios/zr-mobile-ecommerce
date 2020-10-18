import { rem } from 'polished'
import styled, { keyframes } from 'styled-components'
import { colors } from '../../theme/theme'

export const LoadingAnimation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
 `

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${p => p.fullPage && '100vh'};
`

export const LoadingItem = styled.div`
  position: relative;

  display: inline-block;

  width: ${rem(200)};
  height: ${rem(200)};
`

export const LoadingPiece = styled.div`
  position: absolute;
  right: 8px;
  width: 16px;

  display: inline-block;

  background: ${colors.lightTurquoise};

  animation: ${LoadingAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    left: 8px;
    opacity: 0.2;
    animation-delay: -0.48s;
  }

  &:nth-child(2) {
    left: 32px;
    opacity: 0.4;
    animation-delay: -0.24s;
  }

  &:nth-child(3) {
    left: 56px;
    opacity: 0.6;
    animation-delay: -0.12s;
  }

  &:nth-child(4) {
    left: 80px;
    opacity: 0.8;
    animation-delay: 0;
  }
`
