import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const CartItem = useSelector((state) => state.Cart.CartItem);

  return (
    <header className="w-full h-[50px] bg-black text-white flex pt-3 fixed top-0 left-0">
      <h1 className="text-3xl font-bold">Restaurant</h1>

      <ul className="flex gap-10 pl-100">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>

        <li>
          <Link to="/Cart" className="flex items-center gap-2">
            <FaCartArrowDown />
            <span>{CartItem.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;