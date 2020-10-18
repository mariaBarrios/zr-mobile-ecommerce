import React from 'react'
import { LoadingWrapper, LoadingItem, LoadingPiece } from './Loading.styles'

export function Loading() {
  return (
    <LoadingWrapper>
      <LoadingItem>
        <LoadingPiece />
        <LoadingPiece />
        <LoadingPiece />
        <LoadingPiece />
      </LoadingItem>
    </LoadingWrapper>
  )
}
