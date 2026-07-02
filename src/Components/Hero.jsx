import React from "react"

function Hero(){
    return<>
    <section>
       <div className=" w-[100%] h-[500px] bg-[url('https://i.pinimg.com/736x/fb/75/69/fb756952a2fdf74c26229942784046ef.jpg')] bg-cover bg-center">
        
        <h1 className="text-4xl pt-20 pl-10">Welcome To Our Restaurant</h1>
        <p className="text-2xl pl-15 pt-5">Best Food, Best Taste, Best Experience</p>
        <button className="w-[100px] h-[30px] bg-orange-500 rounded-[20px] ml-30 mt-20 text-white">View Menu</button>
       </div>
        
    </section>
    
    </>
}

export default  Hero