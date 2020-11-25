import ProductItems from './ProductItems'

const ProductLists = function (props) {
  const products = props.products
  const onAddOrder = props.onAddOrder
  const onDeleteProduct = props.onDeleteProduct

  function getProduct() {
    return (
      products &&
      products.map((product) => (
        <ProductItems
          {...product}
          key={product.id}
          onAddOrder={onAddOrder}
          onDeleteProduct={props.onDeleteProduct}
        />
      ))
    )
  }
  return <div className="row">{getProduct()}</div>
}

export default ProductLists
