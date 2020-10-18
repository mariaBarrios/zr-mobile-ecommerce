import React from 'react'
import { BackIcon, GoBackWrapper } from './GoBack.styles'

export function GoBack({ to }) {
  return (
    <GoBackWrapper to={to}>
      <BackIcon /> Volver
    </GoBackWrapper>
  )
}
