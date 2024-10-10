
import { useNavigate } from "react-router-dom";




const Display=()=>{

    const navigate =useNavigate();
    return(
        <>
          <h1>This is display page</h1>
          
          
          <button onClick={()=>{navigate("/Address")}}>Address</button>
          <button onClick={()=>{navigate("Number")}}>Address</button>
        </>
    )
}
export default Display;