 import { useDispatch } from "react-redux"
 import {AddToCart} from "../Reducer/index"


function Menu({Data}){

     const dispatch = useDispatch()

    return<>
    <div className="flex flex-wrap gap-4 mt-20 ml-20">
        {Data.map((item) =>(
            <div>
                <img className="w-[200px] h-[200px] rounded-[10px] border-t-4 border-orange-500" src={item.image} alt="" />
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
                 <button onClick={() => dispatch(AddToCart(item))} className="w-[100px] h-[40px] bg-orange-500 rounded-[10px] text-white">Add To Cart</button>
            </div>
            
        ))}
    </div>
    
    </>
}
export default Menu