
import { FaTruck, FaLeaf, FaUtensils, FaStar } from "react-icons/fa";

function Section() {

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-orange-500 text-xl font-semibold">
          Why Choose Us
        </h3>

        <h1 className="text-center text-4xl font-bold text-gray-800 mt-2">
          We Serve the Best Food Experience
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >
              <div className="text-orange-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-xl font-bold mb-3">{item.title}</h2>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section