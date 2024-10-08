import { useDispatch, useSelector } from "react-redux";
import { mydecre, myreset } from "./Add/CounterSlice";
import { myincre } from "./Add/CounterSlice";





const App=()=>{

  const counter = useSelector((state)=>state.mycounter.cnt)
  const mydis =useDispatch();
  return(
    <>
    
    <h1>This is counter  {counter} </h1>

    <button   onClick={()=>{mydis(myincre())}}>Increment</button>
    <button   onClick={()=>{mydis(mydecre())}}>Decrement</button>
    <button   onClick={()=>{mydis(myreset())}}>Reset</button>
    </>
  )
}

export default App;