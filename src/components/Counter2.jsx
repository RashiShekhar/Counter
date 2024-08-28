import React, { useState,useEffect } from "react";

 

export default function Counter(){
    const [count,setCount]=useState(0)

    const handleDecrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    const handleIncrement=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log('hello..');
    },[count])

    return(
      <div className="flex flex-direction-row gap-3">
        <h2> Default: </h2> 
        <button className="btn flex flex-direction-row size-5 items-center gap-2 border-rounded-full font-size-medium text-black cursor-pointer rounded-full bg-gray-400 justify-center" 
        onClick={handleDecrement}>
                -
            </button>
             {count}
            <button className="btn flex flex-direction-row size-5 items-center gap-2 border-rounded-full font-size-medium text-black cursor-pointer rounded-full bg-gray-400 justify-center" 
            onClick={handleIncrement}>
                +
            </button>
    </div>  
    );
}