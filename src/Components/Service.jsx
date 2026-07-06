

function Services() {
  return (
    <section className="py-16 bg-orange-50">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      <div className="flex justify-center gap-8 flex-wrap">

        <div className="bg-white w-64 p-6 rounded-lg  text-center">
          <h2 className="text-2xl font-bold text-orange-500">
            Fast Delivery
          </h2>
          <p className="mt-3 text-gray-600">
            We deliver your food quickly to your home.
          </p>
        </div>

        <div className="bg-white w-64 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-orange-500">
            Fresh Food
          </h2>
          <p className="mt-3 text-gray-600">
            Our meals are prepared using fresh ingredients.
          </p>
        </div>

        <div className="bg-white w-64 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-orange-500">
            Best Chefs
          </h2>
          <p className="mt-3 text-gray-600">
            Our chefs cook delicious meals every day.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services