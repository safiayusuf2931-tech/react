import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";




function Footer(){
    return<>
     <footer className="bg-black w-[100%] h-[120px] text-white mt-10 pl-40">
         
          <div  className="flex gap-30"> 
    <div>
        <h1 className=" text-2xl">Foodie</h1>
        <p className="text-orange-500"> Restaurant</p>

        <div className="flex gap-4 pt-5">
  <CiFacebook />
            <FaInstagram />
            <CiTwitter />
        </div>

    </div>
<div>
    <h1>Quick links</h1>
    <p>home</p>
    <p>menu</p>
    <p>cart</p>
</div>
<div>
    <h1>our services</h1>
    <p>fast delivery</p>
    <p>online order</p>
    <p>take away</p>
</div>
<div>
    <h1>contact us</h1>
    <p>mogdisho</p>
    <p>252 61 233434</p>
    <p>info@foodie.com</p>
    <p>mon-sun:9:00 Am-11:00 pm</p>
</div>
 </div>

     </footer>

    </>
}
export default Footer