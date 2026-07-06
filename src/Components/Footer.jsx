import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";





function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        <div>
          <h1 className="text-2xl font-bold text-orange-500">Foodie</h1>
          <p className="mt-3 text-gray-300">
            We serve fresh and <br /> delicious food every day.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-300">Mogadishu, Somalia</p>
          <p className="text-gray-300">+252 61 2345678</p>
          <p className="text-gray-300">foodie@gmail.com</p>
        </div>

      </div>

      <hr className="my-6 border-orange-500" />

      <p className="text-center text-gray-400">
        © 2026 Foodie. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer