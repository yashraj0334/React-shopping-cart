import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  console.log(cart)
  return (
    <>
      <div className="container mt-3" style={{width:'48%'}}>
        {
          cart.length == 0 ? (
          <>
            <div className='text-center'>
              <h2>Your cart is empty</h2>  
              <Link to={"/"} className="btn btn-warning">Continue shopping</Link>
            </div>
          </>
          ):
          cart.map(product => 
            <div className="card mb-3" style={{width:'700px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text fw-bold">₹ {product.price}</p>
                    <button className='btn btn-warning'>Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        
      </div>
      <div>
        {cart.length != 0 && (
          <div className="container text-center d-flex justify-content-center align-items-center">
          <button className='btn btn-warning mx-5'>Checkout</button>
          <button onClick={()=>setCart("")} className='btn btn-danger'>Clear cart</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
Cart