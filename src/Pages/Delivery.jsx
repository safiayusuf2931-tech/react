// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Delivery() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     note: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.phone || !form.address) {
//       alert("Please fill required fields");
//       return;
//     }

//     const newOrder = {
//       id: Date.now(),
//       name: form.name,
//       phone: form.phone,
//       address: form.address,
//       note: form.note,
//     };

//     const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     localStorage.setItem(
//       "orders",
//       JSON.stringify([...oldOrders, newOrder])
//     );

//     alert("Order placed successfully 🚚");

//     setForm({
//       name: "",
//       phone: "",
//       address: "",
//       note: "",
//     });

//     // go to orders page automatically
//     navigate("/orders");
//   };

//   return (
//     <div className="pt-32 min-h-screen bg-gray-50">

//       <h1 className="text-5xl text-center font-bold">
//         Delivery <span className="text-red-600">Order</span>
//       </h1>

//       <p className="text-center text-gray-600 mt-3">
//         Fill your details to place order
//       </p>

//       <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 mt-10">

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full border p-3 rounded-lg"
//           />

//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="w-full border p-3 rounded-lg"
//           />

//           <input
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Delivery Address"
//             className="w-full border p-3 rounded-lg"
//           />

//           <textarea
//             name="note"
//             value={form.note}
//             onChange={handleChange}
//             placeholder="Extra Note (optional)"
//             className="w-full border p-3 rounded-lg"
//           />

//           <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
//             Place Order 🚚
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

// export default Delivery;