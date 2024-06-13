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
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'

function App() {
  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "red",
      footer_bg: "#0a1435",
      btn: "rgb(98 ,84 ,243)",
      border: "rgba(98, 84,243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgba(132,144,255) 0%, rgb(98,189,252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile: "768px",
      tab: "998px",
    }
  }


  return (
      <ThemeProvider theme={theme}>    {/* TODO: you have to about themeProvider */}
        <BrowserRouter>
          <GlobalStyle />
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
      </ThemeProvider>
  )
}

export default App
