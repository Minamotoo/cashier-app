import React, { useState, useEffect } from 'react'

import ProductLists from '../components/products/ProductLists'
import Calculator from './monitor/Calculator'

import axios from 'axios'

export default function BodyComponent() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [showWarnAdd, setShowWarnAdd] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3030/products')
      .then((res) => setProducts(res.data))
  }, [])

  function addOrder(product) {
    let isOrderExist = orders.find((order) => order.product.id === product.id)
    if (isOrderExist) {
      isOrderExist.quantity++
      isOrderExist.price = parseInt(product.price) * isOrderExist.quantity
    } else {
      setOrders([
        ...orders,
        { product: product, price: parseInt(product.price), quantity: 1 },
      ])
    }
    setTotalPrice(totalPrice + parseInt(product.price))
    setShowWarnAdd(false)
  }

  function deleteOrder(recieveOrder) {
    const isFoundOrder = orders.find(
      (order) => order.product.id === recieveOrder.product.id
    )
    if (isFoundOrder) {
      const afterFilter = orders.filter(
        (order) => order.product.id !== recieveOrder.product.id
      )
      const newTotalPrice = totalPrice - recieveOrder.price
      setTotalPrice(newTotalPrice)
      setOrders(afterFilter)
    }
  }

  function confirmOrder() {
    if (orders.length !== 0) {
      axios
        .post('http://localhost:3030/orders', {
          orders,
          totalPrice,
          date: new Date(),
        })
        .then(() => cancelOrder())
      setShowConfirm(true)
    } else {
      // TODO: check this again
      if (showConfirm) {
        setShowConfirm(false)
      }
      setShowWarnAdd(true)
    }
  }

  function cancelOrder() {
    setOrders([])
    setTotalPrice(0)
  }

  return (
    <div className="container-fluid">
      {showConfirm && (
        <div className="alert alert-success title text-right h5">
          Saved orders already!
        </div>
      )}
      {showWarnAdd && (
        <div className="alert alert-warning title text-right h5">
          You didn't add any order yet!
        </div>
      )}
      <div className="row">
        <div className="col-md-8">
          <ProductLists products={products} onAddOrder={addOrder} />
        </div>
        <div className="col-md-4">
          <Calculator
            totalPrice={totalPrice}
            orders={orders}
            onDeleteOrder={deleteOrder}
            onConfirmOrder={confirmOrder}
            onCancelOrder={cancelOrder}
          />
        </div>
      </div>
    </div>
  )
}
