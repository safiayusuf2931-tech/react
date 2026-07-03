import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


function Header(){

    const CartItem = useSelector ((state) => state.Cart.CartItem)
    return<>
    
    <header className=" w-full h-[50px] bg-black text-white flex pt-3 fixed top-0 left-0 z-50">
        <h1 className="text-white" >Restaurant</h1>
         <ul className="flex gap-10 pl-100">
             <li className="text-orange-500"><Link to="/"> Home</Link> </li>
             <li><Link to="/About">About</Link> </li>  
             <li><Link to="/menu">Menu</Link> </li> 
             <li><Link to="/Contact">Contact</Link> </li> 
             <li><Link to="/cart">Cart

             <span>{CartItem.length}</span>
             </Link> </li>


              

         </ul>


    </header>
    </>
}
export default Header