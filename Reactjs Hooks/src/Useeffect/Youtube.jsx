import { useEffect, useState } from "react"




const Youtube=()=>{

    const [data,setData] =useState(0);

    useEffect(()=>{
       const timer=setInterval(()=>{
        setData((pre)=>pre+1)
      },1000)
      return()=> clearInterval(timer)
    },[])
      
    
    return(
        <>
         <h1>My suscriber</h1>
         <h2>{data}</h2>
        </>
    )
}

export default Youtube



