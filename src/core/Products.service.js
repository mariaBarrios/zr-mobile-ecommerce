export async function getProductsList() {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/product'
  )
  const productList = await response.json()

  return productList
}


export async function getProductDetail(id) {
  const response = await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)

  const productDetail = await response.json()

  return productDetail
}
