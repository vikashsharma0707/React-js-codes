import { useContext } from "react"
import { Hello } from "./App"
import { Hello1 } from "./App"


const ChildC=()=>{
    const name =useContext(Hello)
    const name1 =useContext(Hello1)
    return(
        <>
        <h1>This is child c </h1>
        <h1>Language name is : {name}</h1>
        <h1>This is react js : {name1}</h1>
        </>
    )
}

export default ChildC