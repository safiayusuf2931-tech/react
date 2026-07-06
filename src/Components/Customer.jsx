
function Customer() {
  return (
    <section className="py-16 bg-gray-100 mt-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Customer Reviews
      </h1>

      <div className="flex justify-center gap-6 flex-wrap">

        <div className="bg-white w-72 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Ahmed</h2>
          <p className="text-yellow-500 my-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600">
            The food was very delicious and the service was excellent.
          </p>
        </div>

        <div className="bg-white w-72 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Amina</h2>
          <p className="text-yellow-500 my-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600">
            I enjoyed the pizza. Everything was fresh and tasty.
          </p>
        </div>

        <div className="bg-white w-72 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Mohamed</h2>
          <p className="text-yellow-500 my-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600">
            Fast delivery and friendly staff. I will order again.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Customer
