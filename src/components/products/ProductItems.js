export default function ProductItems(props) {
  const product = props

  return (
    <div className="col-md-3 cold-sm-6">
      <span>
        <img
          className="img-fluid img-thumbnail"
          alt={product.name}
          src={product.image}
          value={product.price}
          onClick={() => product.onAddOrder(product)}
        />
      </span>
      <span className="d-flex justify-content-between p-1">
        <h6>{product.name}</h6>
        <h6 className="text-danger font-weight-bold">{product.price} THB.</h6>
      </span>
      <span>
        {product.onDeleteProduct && (
          <div>
            <button
              className="btn btn-info"
              value={product.price}
              // onClick={() => product.onAddOrder(product)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger float-right"
              value={product.price}
              onClick={() => product.onDeleteProduct(product)}
            >
              Delete
            </button>
          </div>
        )}
        {product.onAddOrder && (
          <div>
            <button
              className="btn btn-block btn-info"
              value={product.price}
              onClick={() => product.onAddOrder(product)}
            >
              Add
            </button>
          </div>
        )}

        {/* {product.onDeleteProduct === undefined && (
          <button className="btn btn-block btn-danger">Delete</button>
        )} */}
      </span>
      <hr />
    </div>
  )
}
