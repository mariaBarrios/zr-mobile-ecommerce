import React, { useState } from 'react'
import { Button, Select } from './AddToCart.styles'

export function AddToCart({ storages, colors }) {
  const [selectedColor, setSelectedColor] = useState(
    colors.length === 1 && colors[0].code
  )
  const [selectedStorage, setSelectedStorage] = useState(
    storages.length === 1 && storages[0].code
  )

  return (
    <>
      <Select
        value={selectedColor}
        onChange={e => setSelectedColor(e.target.value)}>
        {!selectedColor && <option>Elige un color</option>}
        {colors.map(color => (
          <option key={color.code} value={color.code}>
            {color.name}
          </option>
        ))}
      </Select>

      <Select
        value={selectedStorage}
        onChange={e => setSelectedStorage(e.target.value)}>
        {!selectedStorage && <option>Elige capacidad de almacenamiento</option>}
        {storages.map(storage => (
          <option key={storage.code} value={storage.code}>
            {storage.name}
          </option>
        ))}
      </Select>

      <Button
        onClick={() => console.log('Button click')}
        disabled={!selectedColor || !selectedStorage}>
        Añadir al carrito
      </Button>
    </>
  )
}
