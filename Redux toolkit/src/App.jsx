import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "./Todo/TodoSlice";

const App=()=>{



  const myval= useSelector((state)=>state.taskadd.mytask)
  const mydis=useDispatch()
  const [val,setval]=useState("");

  const Addtask =()=>{
     mydis(addtask({id:Date.now(),Task:val}))
  }

  let sno=0;

  const ans = myval.map((key)=>{
    sno++
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.Task}</td>
      </tr>
      </>
    )
  })


  return(
    <>
    
    
    <input type="text"  value={val}  onChange={(e)=>{setval(e.target.value)}}/>
    <button   onClick={Addtask}>Add task</button>
    <hr    size="4" color="blue"   />

    <table>
      <tr>
        <th>sno</th>
        <th>Task</th>
      </tr>
      {ans}
    </table>
    </>
  )
}


export default App;










// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Changecolor } from "./Colorchange/ColorSlice";


// const App=()=>{

//   const myclr = useSelector((state)=>state.mycolor.mycl);
//   const mydis = useDispatch();

//   const [clr,setclr] =useState("");
//   return(
//     <>
//      Enter color :<input type="text" value={clr}  onChange={(e)=>{setclr(e.target.value)}}/>
//               <button  onClick={()=>{mydis(Changecolor(clr))}}>Change color</button>
//                 <div  style={{width:"400px",height:"400px" ,border:"2px solid black",backgroundColor:myclr}}> 

//               </div> 

              
        

//     </>
//   )
// }

// export default App;














//increment decrement function
// import { useDispatch, useSelector } from "react-redux";
// import { mydecre, myreset } from "./Add/CounterSlice";
// import { myincre } from "./Add/CounterSlice";





// const App=()=>{

//   const counter = useSelector((state)=>state.mycounter.cnt)
//   const mydis =useDispatch();
//   return(
//     <>
    
//     <h1>This is counter  {counter} </h1>

//     <button   onClick={()=>{mydis(myincre())}}>Increment</button>
//     <button   onClick={()=>{mydis(mydecre())}}>Decrement</button>
//     <button   onClick={()=>{mydis(myreset())}}>Reset</button>
//     </>
//   )
// }

// export default App;