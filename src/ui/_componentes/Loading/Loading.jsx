import React from 'react'
import { LoadingWrapper, LoadingItem, LoadingPiece } from './Loading.styles'

export function Loading({ fullPage, mini }) {
  return (
    <LoadingWrapper fullPage={fullPage}>
      <LoadingItem mini={mini}>
        <LoadingPiece mini={mini} />
        <LoadingPiece mini={mini} />
        <LoadingPiece mini={mini} />
        <LoadingPiece mini={mini} />
      </LoadingItem>
    </LoadingWrapper>
  )
}
