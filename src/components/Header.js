import '../app/App.css'

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [date, setDate] = useState(new Date())

  setInterval(() => setDate(new Date()), 1000)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 text-left">
          <span className="text-danger font-weight-bold h2">
            {' '}
            <img
              src="/images/logo/logo.png"
              alt="logo"
              style={{ height: 60 }}
            />
            bbL's Restaurant
          </span>
        </div>

        <div className="col-md-3 text-right mt-3">
          <h5 className="text-secondary font-weight-bold">
            {date.toLocaleTimeString()}
          </h5>
          <ul className="list-inline">
            <li className="list-inline-item mx-3">
              <h5>
                <NavLink
                  exact={true}
                  className="main-nav text-decoration-none"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </h5>
            </li>
            <li className="list-inline-item mx-3">
              <h5>
                <NavLink
                  className="main-nav text-decoration-none"
                  activeClassName="active"
                  to="/orders"
                >
                  Orders
                </NavLink>
              </h5>
            </li>
            <li className="list-inline-item mx-3">
              <h5>
                <NavLink
                  className="main-nav text-decoration-none"
                  activeClassName="active"
                  to="/products"
                >
                  Products
                </NavLink>
              </h5>
            </li>
            <li className="list-inline-item ml-3">
              <h5>
                <NavLink
                  className="main-nav text-decoration-none"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header
