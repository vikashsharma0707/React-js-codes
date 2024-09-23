import { useEffect, useState } from "react"



const Display=()=>{

    const [data,setdata] =useState(0);

    useEffect(()=>{
       
        setInterval(()=>{
            const updatedate= new Date();
       setdata(updatedate.toLocaleTimeString())
    },[])
        },1000)
    return(
        <>
         <h1>Current time is : {data}</h1>
        </>
    )
}

export default Display