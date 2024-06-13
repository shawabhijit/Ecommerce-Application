import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Cart from './components/Cart/Cart'
import Error from './components/ErrorPage/Error'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cartdetails' element={<Cart />}/>
          <Route path='/productDeatails/:userId' element={<SingleProduct />}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
