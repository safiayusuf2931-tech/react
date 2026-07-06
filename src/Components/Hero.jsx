import React from "react"
import { Link } from "react-router-dom";
function Hero() {
    const ScrollToMenu = () => {
        const MenuElement = document.getElementById('menu-Section');
        if (MenuElement) {
            MenuElement.scrollIntoView({behavior: 'smooth'});
        }
    };
  return (
    <section className="bg-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h3 className="text-orange-500 font-semibold text-xl mb-3">
            Welcome to Foodie
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Delicious Food <br />
            Delivered To Your <span className="text-orange-500">Doorstep</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Enjoy fresh and tasty meals prepared by our professional chefs.
            Fast delivery, quality ingredients, and unforgettable flavors are
            waiting for you.
          </p>
              
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
              Order Now
            </button>

            <button onClick={ScrollToMenu}    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold">
              View Menu
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
            alt="Delicious Pizza"
            className="w-[500px] h-[500px]  rounded-full shadow-4xl animation duration-3s"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

