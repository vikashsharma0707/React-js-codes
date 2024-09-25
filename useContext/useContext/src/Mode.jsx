import { useEffect, useState } from "react";



const Mode=()=>{

    const [data,setdata] =useState("light-mode");

    const hanledata=()=>{
        if(data=="light-mode"){
            setdata("dark-mode")
        }
    }

    useEffect(()=>{
        document.querySelector("body").className=data
    },[data])


    return(
        <>
        
        <button onClick={hanledata}>Click here</button>
        
        </>
    )
}

export default Mode;