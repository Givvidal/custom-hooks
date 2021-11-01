import { useState } from "react/cjs/react.development";


export const useCounter = (initialcounter = 10) =>{
    
    const[counter,setCounter] = useState(initialcounter);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(initialcounter);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };
} 