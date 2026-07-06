import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Reducer";

function View({ Data }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const item = Data.find((food) => food.id === Number(id));

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <div className="mt-10 w-200 h-[300px] bg-white mt-20 ml-20 border border-gray-300 rounded-xl shadow-xl p-5 flex gap-4">
      <img
        className="w-[300px] h-[200px]"
        src={item.image}
        alt={item.name}
      />
  <div className="ml-10">

  
      <h1 className="text-4xl  ">{item.name}</h1>
      <p className="pt-5 text-2xl text-orange-500">{item.price}</p>

      <button
        onClick={() => dispatch(AddToCart(item))}
        className="w-[120px] h-[40px] bg-orange-500 text-white mt-10 mr-20 rounded-[10px]"
      >
        Add To Cart
      </button>
      </div>
    </div>
  );
}

export default View;