import React, { useState } from 'react'

const Header = () => {
  const [date, setDate] = useState(new Date())

  setInterval(() => setDate(new Date()), 1000)

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-9 text-left'>
          <span className='text-danger font-weight-bold h2'>
            {' '}
            <img
              src='/images/logo/logo.png'
              alt='logo'
              style={{ height: 60 }}
            />
            bbL's Restaurant
          </span>
        </div>

        <div className='col-md-3 text-right mt-3'>
          <span className='text-secondary font-weight-bold'>
            {date.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header
