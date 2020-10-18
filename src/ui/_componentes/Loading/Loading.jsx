import React from 'react'
import { LoadingWrapper, LoadingItem, LoadingPiece } from './Loading.styles'

export function Loading(fullPage) {
  return (
    <LoadingWrapper fullPage={fullPage}>
      <LoadingItem>
        <LoadingPiece />
        <LoadingPiece />
        <LoadingPiece />
        <LoadingPiece />
      </LoadingItem>
    </LoadingWrapper>
  )
}
