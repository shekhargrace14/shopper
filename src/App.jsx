// import { Outlet } from 'react-router-dom'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx'
import Store from './pages/Store.jsx'
import Contact from './pages/Contact.jsx'
import Deals from './pages/Deals.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import Wishlist from "./pages/Wishlist.jsx"
import Cart from "./pages/Cart.jsx"
import Grocery from "./pages/Grocery.jsx"
import Furniture from "./pages/Furniture.jsx"
import Clothes from "./pages/Clothes.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Grocery" element={<Grocery/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/Clothes" element={<Clothes/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App