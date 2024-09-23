import { useEffect, useState } from "react";




const Title=()=>{

    const [data,setdata] =useState(0);
    const [name,setname] =useState("");


    useEffect(()=>{
      document.title =`data: ${data}`
    },[data])

   useEffect(()=>{
     console.log(name)
   },[name])
    return(
        <>
        <h1>Increment value is : {data}</h1>
        <button onClick={()=>{setdata(data+1)}}>Increment</button>
        <h1>Name add : {name}</h1>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>

        </>
    )
}
export default Title;