import React from 'react'

const Footer = (props) => {
  const { company, email } = props
  return (
    <div className='container-fluid'>
      <hr />
      <div className='text-center'>
        <span className='text-info text-uppercase'>Powered by </span>
        <span className='text-info'>{company} | </span>
        <span className='text-muted text-uppercase'>Contact: </span>
        <span className='text-muted'>{email}</span>
      </div>
    </div>
  )
}

export default Footer
