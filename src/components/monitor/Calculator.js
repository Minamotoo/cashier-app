export default function Calculator(props) {
  const totalPrice = props.totalPrice
  const orders = props.orders
  const onDeleteOrder = props.onDeleteOrder

  function showorders(orders) {
    if (!orders || orders.length === 0) {
      return <li>No orders.</li>
    } else {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Menu</th>
              <th className='text-center' scope='col'>
                Quantity
              </th>
              <th className='text-center' scope='col'>
                Price
              </th>
              <th className='text-center' scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.product.id}>
                <td>{order.product.name}</td>
                <td className='text-center'>{order.quantity}</td>
                <td className='text-center'>{order.price.toLocaleString()}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger btn-sm'
                    onClick={() => onDeleteOrder(order)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
  }
  return (
    <div>
      <ul className='list-unstyled'>{showorders(orders)}</ul>
      <hr />
      {orders.length > 0 && (
        <span className='text-secondary'>
          {orders.length > 1 ? (
            <h6>{orders.length} Menus</h6>
          ) : (
            <h6>{orders.length} Menu</h6>
          )}
        </span>
      )}
      <span className='d-flex justify-content-between'>
        <h4 className='text-secondary'>Total Price</h4>
        <h3 className='text-right text-primary'>
          {totalPrice.toLocaleString()} THB.
        </h3>
      </span>
      <hr />
      <div className='align-bottom'>
        <button className='btn btn-block btn-success font-weight-bold'>
          Confirm
        </button>
        <button className='btn btn-block btn-secondary'>Cancel</button>
      </div>
    </div>
  )
}
