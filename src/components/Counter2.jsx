import React, { useState,useEffect } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
 

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
      <div className="flex gap-2 items-center justify-center border-2 border-black bg-whitesmoke w-[13%] h-50% p-5px ">
        <h2> Default: </h2> 
        <div className="flex gap-2 items-center ">
        <button className="btn flex flex-direction-row size-4 items-center gap-1 text-black font-size-medium text-black bg-transparent cursor-pointer justify-center" 
        onClick={handleDecrement}>
                {CiCircleMinus}
            </button>
            </div>
            <div className="flex w-3 mx-2">
             {count}
             </div>
             <div className="flex gap-px items-center"> 
            <button className="btn flex flex-direction-row size-4 items-center gap-2 font-size-medium text-black bg-transparent cursor-pointer justify-center" 
            onClick={handleIncrement}>
                {CiCirclePlus}
            </button>
            </div>
    </div>  
    );
}