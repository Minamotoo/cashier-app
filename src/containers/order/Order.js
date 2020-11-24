import Header from '../../components/Header'
import Footer from '../../components/Footer'

import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

export default function Order() {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3030/orders`).then((res) => setOrders(res.data))
  }, [])

  //this function, idk why doesn't it work when i call in <div>{showOrders()}</div>
  // function showOrders() {
  //   orders &&
  //     orders.map((order, key) => {
  //       return <li key={key}>{order.id}</li>
  //     })
  // }

  function finishOrder(order) {
    axios.delete(`http://localhost:3030/orders/${order.id}`).then(() => {
      axios
        .get(`http://localhost:3030/orders`)
        .then((res) => setOrders(res.data))
    })
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <h1>Orders</h1>
        <div className="row">
          {orders &&
            orders.map((order, key) => {
              const date = new Date(order.date)
              return (
                <div key={key} className="col-md-3 mb-5">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">Order {order.id}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {date.toLocaleDateString()} |{' '}
                        {date.toLocaleTimeString()}
                      </CardSubtitle>
                      <CardText>
                        {order.orders.map((record, key) => {
                          return (
                            <li key={key} className="list-unstyled">
                              {record.product.name} x {record.quantity}
                            </li>
                          )
                        })}
                      </CardText>
                      <div className="d-flex justify-content-end">
                        <Button
                          className="btn btn-success mr-3"
                          onClick={() => finishOrder(order)}
                        >
                          O
                        </Button>
                        {/* <Button className="btn btn-danger">X</Button> */}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              )
            })}
        </div>
      </div>
      <Footer company="bbL" email="chestprime@gmail.com" />
    </div>
  )
}
