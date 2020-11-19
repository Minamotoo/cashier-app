import Home from '../containers/Home'
import About from '../containers/About'
import Order from '../containers/order/Order'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  function renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/order" component={Order} />
      </Switch>
    )
  }
  return <BrowserRouter>{renderRouter()}</BrowserRouter>
}
