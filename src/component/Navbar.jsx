import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartPlus } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";

const Navbar = ({setData,cart}) => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  function filterByCategory(category){
    const element = items.filter(Prod => Prod.category === category)
    // console.log(element);
    setData(element);
  }

  function filterByPrice(price){
    const element = items.filter(prod => prod.price >= price)
    setData(element)
  }

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }


  return (
    <>
      <header className=' sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">E-kart</Link>
            <form onSubmit={handleSubmit} className="search-box">
                <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder='Search Product' />
            </form>
            <Link to={'/cart'} className="cart">
              <button type="button" className="btn btn-primary position-relative">
                <FaCartPlus style={{fontSize:'1.5rem', color:''}} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              <span className="visually-hidden">unread messages</span>
              </span>
              </button>
            </Link>
        </div>
        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div onClick={()=>setData(items)} className="items">No Filter</div>
            <div onClick={()=>filterByCategory("mobiles")} className="items">Mobiles</div>
            <div onClick={()=>filterByCategory("laptops")} className="items">Laptops</div>
            <div onClick={()=>filterByCategory("tablets")} className="items">Tablets</div>
            <div onClick={()=>filterByPrice("29000")} className="items">{">="} 29999</div>
            <div onClick={()=>filterByPrice("49999")} className="items">{">="} 49999</div>
            <div onClick={()=>filterByPrice("69999")} className="items">{">="} 69999</div>
            <div onClick={()=>filterByPrice("89999")} className="items">{">="} 89999</div>
        </div>
          )
        }

        
      </header>
    </>
  )
}

export default Navbar
