import Header from "./Components/Header"
import { Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Menu from "./Pages/Menu"
import Data from "./Components/Data"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"


function App(){
  return<>
  <Header/>

 

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu Data={Data}/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
   
 <Footer/>
  </>
}
export default App