import { createContext } from "react";
import ChildA from "./ChildA";



const Hello= createContext();
const App=()=>{
  return(
    <>
    <h1>This is chjkhjahdf</h1>
    <Hello.Provider value={"React js"}>
    <ChildA/>
    </Hello.Provider>
   
    </>
  )
}

export default App;
export {Hello}