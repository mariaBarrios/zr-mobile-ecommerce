import { rem } from 'polished'
import styled, { keyframes } from 'styled-components'
import { colors, sizes } from '../../theme/theme'

export const LoadingAnimation = keyframes`
  0% {
    top: ${rem(8)};
    height: ${rem(64)};
  }
  50%, 100% {
    top: ${rem(24)};
    height: ${rem(32)};
  }
 `

export const LoadingAnimationMini = keyframes`
  0% {
    top: ${rem(2)};
    height: ${rem(16)};
  }
  50%, 100% {
    top: ${rem(6)};
    height: ${rem(8)};
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

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => (p.mini ? rem(25) : rem(100))};
  height: ${p => (p.mini ? rem(20) : rem(40))};
`

export const LoadingPiece = styled.div`
  position: absolute;
  right: ${p => (p.mini ? rem(2) : rem(sizes.tiny))};

  display: inline-block;
  width: ${p => (p.mini ? rem(4) : rem(sizes.mini))};

  background: ${colors.lightTurquoise};

  animation: ${p => (p.mini ? LoadingAnimationMini : LoadingAnimation)} 1.2s
    cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    left: ${p => (p.mini ? rem(2) : rem(8))};
    opacity: 0.2;
    animation-delay: -0.48s;
  }

  &:nth-child(2) {
    left: ${p => (p.mini ? rem(8) : rem(32))};
    opacity: 0.4;
    animation-delay: -0.24s;
  }

  &:nth-child(3) {
    left: ${p => (p.mini ? rem(14) : rem(56))};
    opacity: 0.6;
    animation-delay: -0.12s;
  }

  &:nth-child(4) {
    left: ${p => (p.mini ? rem(20) : rem(80))};
    opacity: 0.8;
    animation-delay: 0;
  }
`
