import Header from "./Components/Header"
import { Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Menu from "./Pages/Menu"
import Data from "./Components/Data"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
import ChefDetails from "./Pages/ChefDetails";
import Orders from "./Pages/Orders";
// import Delivery from "./Pages/Delivery";






function App(){
  return<>
  <Header/>

 

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu Data={Data}/>} />
     <Route path="/about" element={<About />} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/chef/:id" element={<ChefDetails />} />
    {/* <Route path="/delivery" element={<Delivery />} /> */}
<Route path="/orders" element={<Orders />} />
  </Routes>
   
 <Footer/>
  </>
}
export default App