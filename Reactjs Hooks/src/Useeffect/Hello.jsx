import { useEffect, useState } from "react";



const Hello=()=>{
    const [data,setdata] =useState(0);
    useEffect(()=>{
        console.log("hello" ,data)
    },[data])


    return(
        <>
        <h1>{data}</h1>
          <button onClick={()=>{setdata(data+1)}}>Add data</button>
        </>
    )
}

export default Hello;