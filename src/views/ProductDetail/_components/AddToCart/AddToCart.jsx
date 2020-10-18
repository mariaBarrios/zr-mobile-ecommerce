import React, { useContext, useState } from 'react'
import { addProductItemToCart } from '../../../../core/Products.service'
import { Loading } from '../../../../ui/_componentes/Loading/Loading'
import { CartContext } from '../../../_components/CartContext'
import { Button, Select } from './AddToCart.styles'

export function AddToCart({ storages, colors, productId }) {
  const [selectedColor, setSelectedColor] = useState(
    colors.length === 1 && colors[0].code
  )
  const [selectedStorage, setSelectedStorage] = useState(
    storages.length === 1 && storages[0].code
  )

  const { setCartItems } = useContext(CartContext)

  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)

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
        onClick={() =>
          addProductItemToCart({
            id: productId,
            colorCode: selectedColor,
            storageCode: selectedStorage
          })
            .then(result => setCartItems(result.count))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
        }
        disabled={!selectedColor || !selectedStorage}>
        {isLoading ? <Loading /> : 'Añadir al carrito'}
      </Button>
    </>
  )
}
