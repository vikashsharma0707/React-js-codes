import { useState } from "react"



const Increment=()=>{


    const [count,setcount] =useState(0);


    const incre=()=>{
       setcount(count+1)
    }

    const decre=()=>{
        setcount(count-1)
     }

     const rset=()=>{
        setcount(0)
     }


    return(
        <>
         <h1>The Value is : {count}</h1>
         <button  onClick={incre}>Increment</button>
         <button  onClick={decre}>Decrement</button>
         <button  onClick={rset}>Reset</button>
        
        </>
    )
}

export default Increment