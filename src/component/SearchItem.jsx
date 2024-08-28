import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import { items } from './Data';

const SearchItem = ({cart, setCart}) => {

  const {term} = useParams();
  const [search, setSearch] = useState([]);

  

  useEffect(()=>{
    function itemSearch(){
      const element = items.filter(prod => prod.title.toLowerCase().includes(term.toLowerCase()))
      setSearch(element)
    }
    itemSearch()
  },[term])
  
  return (
    <div>
      <Product cart={cart} setCart={setCart} items={search} />
    </div>
  )
}

export default SearchItem
