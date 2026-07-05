import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  RemoveFromCart,
  IncreaseQty,
  DecreaseQty,
  ClearCart,
} from "../Reducer";

function Orders() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.Cart.CartItem);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderId, setOrderId] = useState("");

  // FIX TOTAL (no NaN)
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.toString().replace(/[^0-9.]/g, ""));
    return sum + price * item.qty;
  }, 0);

  // generate order id
  const generateOrderId = () => {
    return "ORD-" + Math.floor(Math.random() * 1000000);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setLoading(true);
    setSuccess(false);

    setOrderTotal(total);
    setOrderId(generateOrderId());

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2500);
  };

  // AUTO CLEAR CART AFTER SUCCESS
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(ClearCart());
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  return (
    <div className="pt-32 min-h-screen bg-gray-50">

      <h1 className="text-5xl text-center font-bold">
        My <span className="text-red-600">Orders</span>
      </h1>

      {cart.length === 0 ? (
        <p className="text-center mt-10 text-gray-500 text-xl">
          No items in cart 🚫
        </p>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="max-w-5xl mx-auto mt-10 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 shadow-lg rounded-xl flex justify-between items-center"
              >
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>

                </div>

                {/* QTY */}
                <div className="flex items-center gap-3">

                  <button onClick={() => dispatch(DecreaseQty(item.id))}>-</button>

                  <span className="font-bold">{item.qty}</span>

                  <button onClick={() => dispatch(IncreaseQty(item.id))}>+</button>

                </div>

                {/* DELETE */}
                <button
                  onClick={() => dispatch(RemoveFromCart(item.id))}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>

          {/* TOTAL + CHECKOUT */}
          <div className="text-center mt-10">

            <h2 className="text-3xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>

            {loading && (
              <p className="mt-4 text-blue-600 font-bold animate-pulse">
                Processing Payment... ⏳
              </p>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`mt-4 px-6 py-3 rounded-lg text-white font-bold
              ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}
              `}
            >
              {loading ? "Processing..." : "Checkout / Pay Now"}
            </button>

            <br />

            <button
              onClick={() => dispatch(ClearCart())}
              className="mt-3 bg-black text-white px-5 py-2 rounded-lg"
            >
              Clear Cart
            </button>

          </div>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mt-8 max-w-md mx-auto bg-green-100 border border-green-400 text-green-800 px-6 py-5 rounded-xl shadow-lg">

              <h2 className="text-2xl font-bold">
                🎉 Payment Successful!
              </h2>

              <p className="mt-2">
                Your order has been processed successfully.
              </p>

              <p className="mt-2 font-semibold">
                Total Paid: ${orderTotal.toFixed(2)}
              </p>

              <p className="text-sm text-gray-600">
                Order ID: {orderId}
              </p>

              <p className="text-sm text-gray-600">
                Status: Confirmed ✔
              </p>

              <p className="text-xs mt-2 text-gray-500">
                Thank you for shopping 🙏
              </p>

            </div>
          )}

        </>
      )}

    </div>
  );
}

export default Orders;