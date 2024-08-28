import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Product from './component/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetail from './component/ProductDetail'
import SearchItem from './component/SearchItem'
import Cart from './component/Cart'
import { items } from './component/Data'

function App() {
  const [data,setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}></Route>
          <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
