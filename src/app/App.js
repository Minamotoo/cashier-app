import Home from '../containers/Home'
import About from '../containers/About'
import Order from '../containers/order/Order'
import Product from '../containers/product/Product'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  function renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/orders" component={Order} />
        <Route path="/products" component={Product} />
      </Switch>
    )
  }
  return <BrowserRouter>{renderRouter()}</BrowserRouter>
}
