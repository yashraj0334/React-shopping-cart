import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = ({cart, setCart}) => {
    const {id} = useParams();
    const [products,setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(()=>{
        const filterProduct = items.filter(product => product.id == id)
        // console.log(filterProduct)
        setProduct(filterProduct[0])

        const relatedProduct = items.filter(pro => pro.category === products.category)
        setRelatedProduct(relatedProduct);
    },[id,products.category])

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
    <div>
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
      <div className="container d-flex justify-content-center align-items-center gap-4">
        <div className="image d-flex justify-content-center align-content-center">
            <img src={products.imgSrc} width='300' height='300' alt="" />
        </div>
        <div>
            <h1 className="card-title">{products.title}</h1>
            <p className="card-text fs-4">{products.description}</p>
            <p className="card-text fs-3 fw-bold">₹ {products.price}</p>
            <button onClick={()=>addToCart(products.id,products.price,products.title,products.description,products.imgSrc)} clas sName="btn btn-primary">Add to cart</button>
        </div>
      </div>
      <h1 className='text-center mt-2' style={{fontFamily:'arial'}}>Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </div>
  )
}

export default ProductDetail