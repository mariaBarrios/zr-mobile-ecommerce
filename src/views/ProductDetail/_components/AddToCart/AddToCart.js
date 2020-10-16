import React, { useState } from 'react'

export function AddToCart({storages, colors}) {
  const [selectedColor, setSelectedColor] = useState(colors.lenght === 1 && colors.code[0])
  const [selectedStorage, setSelectedStorage] = useState(colors.lenght === 1 && colors.code[0])

  return (
    <>
      <select
        value={selectedColor}
        onChange={e => setSelectedColor(e.target.value)}>
        {!selectedColor && <option>Elige un color</option>}

        {colors.map(color => (
          <option key={color.code} value={color.code}>
            {color.name}
          </option>
        ))}
      </select>

      <select
        value={selectedStorage}
        onChange={e => setSelectedStorage(e.target.value)}>
        {!selectedStorage && <option>Elije capacidad de almacenamiento</option>}

        {storages.map(storage => (
          <option key={storage.code} value={storage.code}>
            {storage.name}
          </option>
        ))}
      </select>

      <button disabled={!selectedColor || !selectedStorage}>
        Añadir
      </button>
    </>
  )
}
