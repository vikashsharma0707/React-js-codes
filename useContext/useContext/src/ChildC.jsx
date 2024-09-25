import { useContext } from "react"
import { Hello } from "./App"


const ChildC=()=>{
    const name =useContext(Hello)
    return(
        <>
        <h1>This is child c </h1>
        <h1>Language name is : {name}</h1>
        </>
    )
}

export default ChildC