function Section3() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Featured <span className="text-orange-500">Menu</span>
        </h1>

        <div className="flex gap-10 flex-wrap justify-center">

          {/* ITEM 1 */}
          <div className="w-[300px] h-[240px] ml-10 mt-5 rounded-[20px]
                          transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
            <img
              className="w-[250px] h-[170px] rounded-[6px] object-cover "
              src="https://i.pinimg.com/736x/fb/b1/a4/fbb1a45dcaa209d2a0e1f190fc11e00a.jpg"
              alt=""
            />
            <div className="flex mt-4 justify-between items-center">
              <div className="pl-6">
                <h1>grilled chicken</h1>
                <p>$8.99</p>
              </div>
              <button className="w-[110px] h-[30px] bg-orange-500 rounded-[10px] text-white hover:bg-orange-600 transition">
                Add to cart
              </button>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="w-[250px] h-[240px] mt-5 rounded-[20px]
                          transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              className="w-[250px] h-[150px] rounded-[6px] object-cover"
              src="https://i.pinimg.com/736x/c5/6e/cb/c56ecba09df22d525589f1947d790e0b.jpg"
              alt=""
            />
            <div className="flex mt-4 justify-between items-center">
              <div  className="pl-6">
                <h1>beef burger</h1>
                <p>$6.99</p>
              </div>
              <button className="w-[110px] h-[30px] bg-orange-500 rounded-[10px] text-white hover:bg-orange-600 transition">
                Add to cart
              </button>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="w-[250px] h-[240px] mt-5 rounded-[20px]
                          transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              className="w-[250px] h-[150px] rounded-[6px] object-cover"
              src="https://i.pinimg.com/736x/d9/65/78/d96578ca4b7a22bfb3f3df91358ab54b.jpg"
              alt=""
            />
            <div className="flex mt-4 justify-between items-center">
              <div  className="pl-6">
                <h1>chicken pizza</h1>
                <p>$12.99</p>
              </div>
              <button className="w-[110px] h-[30px] bg-orange-500 rounded-[10px] text-white hover:bg-orange-600 transition">
                Add to cart
              </button>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="w-[250px] h-[240px] mt-5 rounded-[20px]
                          transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              className="w-[250px] h-[150px] rounded-[6px] object-cover"
              src="https://i.pinimg.com/736x/1d/78/c4/1d78c43191f5490183d00b7e86093bfa.jpg"
              alt=""
            />
            <div className="flex mt-4 justify-between items-center">
              <div className="pl-6">
                <h1>chips</h1>
                <p>$2</p>
              </div>
              <button className="w-[110px] h-[30px] bg-orange-500 rounded-[10px] text-white hover:bg-orange-600 transition">
                Add to cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Section3;