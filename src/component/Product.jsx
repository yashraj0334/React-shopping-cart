import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({items, cart, setCart}) => {

   const addToCart = (id,price,title,description,imgSrc) => {
    const obj ={id,price,title,description,imgSrc}
    setCart([...cart,obj])

    // console.log("Cart element =", cart)
    toast.success('Item added on cart', {
        position: "top-right",
        autoClose: 1498,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
   }
   
    
  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={1498}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <div className="container my-5">
            <div className="row">
                {
                    items.map(product => 
                        <div className='col-lg-4 my-3 text-center'>
                            <div className="card" style={{width:'18rem'}}>
                                <Link to={`product/${product.id}`}><img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text fw-bold">₹ {product.price}</p>
                                    <button onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)} className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Product
