export async function getProductsList() {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/product'
  )

  if (!response.ok) {
    throw new Error('Network Error')
  }

  const productList = await response.json()

  return productList
}

export async function getProductDetail(id) {
  const response = await fetch(
    `https://front-test-api.herokuapp.com/api/product/${id}`
  )

  if (!response.ok) {
    throw new Error('Network Error')
  }

  const productDetail = await response.json()

  return productDetail
}
