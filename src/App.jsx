import Header from "./Components/Header"
import { Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Data from "./Components/Data"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
<<<<<<< HEAD
import View from "./Pages/View"
import Menu from "./Pages/Menu"
import Cart from "./Pages/Cart"
=======
import ChefDetails from "./Pages/ChefDetails";
import Orders from "./Pages/Orders";
// import Delivery from "./Pages/Delivery";



>>>>>>> bfe3f669e2b531299830d358847a6d73c25d2850



function App(){
  return<>
  <Header/>

 

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu Data={Data}/>} />
     <Route path="/about" element={<About />} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/cart" element={<Cart/>} />
<<<<<<< HEAD
    <Route path="/Menu/:id" element={<View Data={Data} />} />
    

=======
    <Route path="/chef/:id" element={<ChefDetails />} />
    {/* <Route path="/delivery" element={<Delivery />} /> */}
<Route path="/orders" element={<Orders />} />
>>>>>>> bfe3f669e2b531299830d358847a6d73c25d2850
  </Routes>
   
 <Footer/>
  </>
}
export default App