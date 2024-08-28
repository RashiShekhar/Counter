import React, { useState,useEffect } from "react";
import { FaTrash,FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Counter(){
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(0);
    }
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
        <div className="flex h-screen justify-center items-center">
            <div className="flex gap-2 items-center">
            <button className="btn flex items-center w-4 mx-3 bg-transparent font-size-medium cursor-pointer m-4s content-center  text-black" onClick={handleClick}>
            <FaTrash/>
            </button>
            </div>
            <div className="flex gap-2 items-center">
            <button className="btn flex size-5 mx-1  items-center bg-transparent font-size-medium text-black cursor-pointer" onClick={handleDecrement}>
                <FaChevronDown/>
            </button>
            </div>
            <div className="flex w-3 mx-2" >

                {count}

            </div>
            <div className="flex gap-2">
            <button className="btn flex items-center mx-2 bg-transparent font-size-medium text-black cursor-pointer" onClick={handleIncrement}>
                <FaChevronUp/>
            </button>
            </div>
        </div>

    );
}