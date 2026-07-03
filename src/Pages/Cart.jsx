import { useSelector } from "react-redux"

function Cart({Data}){
      const CartItem = useSelector((state) => state.Cart.CartItem);

    return<>
       <div>
        <div className="flex flex-wrap gap-6 mt-20 ml-20">
            {CartItem.map((item) =>{
                return(
                    <div>
                        <img  className="w-[300px] h-[200px] rounded-[20px] border-t-3 border-black" src={item.image} alt="" />
                        <h1>{item.name}</h1>
                        <h1>{item.id}</h1>
                        <h1>{item.price}</h1>

                    </div>
                )
            })}
        </div>
       </div>
    
    </>
}
export default Cart