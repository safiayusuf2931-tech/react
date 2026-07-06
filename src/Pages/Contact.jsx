import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="pt-32 min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-5xl font-bold">
          Contact <span className="text-red-600">Us</span>
        </h1>
        <p className="text-gray-600 mt-4">
          We are here 24/7 for your orders & bookings
        </p>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mt-12 px-6">

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaPhone className="text-3xl text-red-600 mx-auto" />
          <h2 className="font-bold mt-3">Call Us</h2>
          <p className="text-gray-600">+252 61 234 5678</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaEnvelope className="text-3xl text-red-600 mx-auto" />
          <h2 className="font-bold mt-3">Email</h2>
          <p className="text-gray-600">info@restaurant.com</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaMapMarkerAlt className="text-3xl text-red-600 mx-auto" />
          <h2 className="font-bold mt-3">Location</h2>
          <p className="text-gray-600">Mogadishu, Somalia</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaClock className="text-3xl text-red-600 mx-auto" />
          <h2 className="font-bold mt-3">Open</h2>
          <p className="text-gray-600">10AM - 11PM</p>
        </div>

      </section>

      {/* FORM + MAP */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-16 px-6">

        {/* FORM */}
        <div className="bg-white p-8 shadow-xl rounded-xl">

          <h2 className="text-3xl font-bold mb-6">
            Send Message
          </h2>

          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
              Message sent successfully ✅
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              className="w-full border p-3 rounded-lg"
            />

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
              Send Message
            </button>

          </form>

        </div>

        {/* MAP (REAL GOOGLE MAP) */}
        <div className="rounded-xl overflow-hidden shadow-xl">

          <iframe
  className="w-full h-[450px]"
  src="https://www.google.com/maps?q=Mogadishu&output=embed"
  loading="lazy"
/>

        </div>

      </section>

    </div>
  );
}

export default Contact;