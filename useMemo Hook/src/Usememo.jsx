import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";



const Usememo=()=>{


    const [count,setcount] =useState(0);
    const [data,setdata] =useState(false)

    function add(count){
     console.log("this function :",count)
     for(let i=0;i<=100000000;i++){
        
     }
     return count;
    }

    

    let ans=useMemo(()=>{
        return add(count);
    },[count])

    
       
    


    return(
        <>
          <button onClick={()=>{setcount(count+1)}}>Add</button>
          <h1>Value of sum is : {count}</h1>

          <h1>Value : </h1>

          <button onClick={()=>{setdata(!data)}}>Add</button>
          <h1>Value of sum is : {data?" you clicked":"please click"}</h1>
        </>
    )
}
export default Usememo;