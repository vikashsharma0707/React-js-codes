import { useState } from "react"



const Multiplestate=()=>{


    const [count,setcount] =useState(0);
    const [mcount,setmcount]=useState(1);


    const incre=()=>{
       setcount(count+mcount)
    }

    const decre=()=>{
        setcount(count-mcount)
     }

     const rset=()=>{
        setcount(rsete(0))
     }

     const incree=()=>{
        setmcount(mcount+1)
     }
 
     const decree=()=>{
         setmcount(mcount-1)
      }
 
      const rsete=()=>{
         setmcount(0)
      }
 


    return(
        <>
         <h1>The Value is : {count}</h1>
         <button  onClick={incre}>Increment</button>
         <button  onClick={decre}>Decrement</button>
         <button  onClick={rset}>Reset</button>

         <h1>This is multiple state  {mcount}</h1>
         <button  onClick={incree}>MIncrement</button>
         <button  onClick={decree}>MDecrement</button>
         <button  onClick={rsete}>MReset</button>
        </>
    )
}

export default Multiplestate;