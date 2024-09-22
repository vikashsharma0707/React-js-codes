import { useState } from "react";




const Formhandling=()=>{

    const [data,setdata] = useState("")

    const handledata=(e)=>{
         console.log(data);
         
    }


    return(
        <>
        <h1>This is Form handling </h1>
        <input type="test" value={data}  onChange={(e)=>{setdata(e.target.value)}}/>
        <h1>value of form hanlding : {data}</h1>
        <button onClick={handledata}>Add Data</button>
        </>
    )
}

export default Formhandling;