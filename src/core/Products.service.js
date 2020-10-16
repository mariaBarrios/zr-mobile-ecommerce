export async function getProductsList() {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/product'
  )
  const productList = await response.json()

  return productList
}
