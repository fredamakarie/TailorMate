import React from 'react'

const CustomerDetail = () => {
  return (
    <div>
      <h2>{customer_name}</h2>
      <div>
        <h2>Information</h2>
        <p>Nam</p>
      </div>
      <div>
        <h2>Measurements</h2>
        <div>
          <h3>Dresses</h3>
        </div>
        <div>
          <h3>Skirt</h3>
        </div>
        <div>
          <h3>Blouse</h3>
        </div>
        <div>
          <h3>Trousers</h3>
          <p>Trouser length: {}</p>
        </div>
      </div>
      <div>
        <h3>Additional Information</h3>
      </div>
    </div>
  )
}

export default CustomerDetail