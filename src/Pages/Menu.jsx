import { Link } from "react-router-dom";
import { AddToCart } from "../Reducer";
import { useDispatch } from "react-redux";
function Menu({ Data }) {
  return (
    <div className="flex flex-wrap gap-4 mt-20 ml-20">
      {Data.map((item) => (
        <div key={item.id}>
          <img
            className="w-[200px] h-[200px] rounded-[10px]"
            src={item.image}
            alt=""
          />

          <h1>{item.name}</h1>
          <h1>{item.price}</h1>

          <Link to={`/menu/${item.id}`}>
            <button className="w-[100px] h-[40px] bg-orange-500 text-white rounded-[10px]">
              View
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;