import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../Reducer";

function Cart() {
  const cartItems = useSelector((state) => state.Cart.CartItem);
  const dispatch = useDispatch();

  return (
    <div className="mt-20 flex flex-wrap gap-6 px-5">

      <h1 className="w-full text-2xl font-bold">Cart Page</h1>

      {cartItems.length === 0 ? (
        <h2 className="text-red-500">Cart is empty</h2>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="w-[250px] bg-white border rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              className="w-[200px] h-[200px] rounded"
              src={item.image}
              alt={item.name}
            />

            <h1 className="text-xl font-bold">{item.name}</h1>
            <h2>{item.price}</h2>
            <p>Qty: {item.qty}</p>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="mt-2 w-[100px] h-[40px] bg-blue-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className="w-[140px] h-[45px] bg-red-500 text-white rounded mt-5"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;