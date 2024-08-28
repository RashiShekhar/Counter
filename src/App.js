import React, { useState } from "react";
import Counter from "./components/Counter";
import { FaTrash,FaChevronDown, FaChevronUp } from "react-icons/fa";
import Counter2 from "./components/Counter2";


export default function App(){
        const [count, setCount]=useState(0)
    return(
        <div className="flex flex-col space-y-4 h-screen items-center justify-center">
          
            <Counter/>

            <Counter2 />
        </div>
    );
}