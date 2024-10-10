import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deltask, editsave, workct, workunct } from "./Todo/TodoSlice";

const App=()=>{



  const myval= useSelector((state)=>state.taskadd.mytask)
  const mydis=useDispatch()
  const [val,setval]=useState("");
  // const [btn,setbtn]=useState(true);
  const [edt,setedit]=useState("");
  

  const Addtask =()=>{
     mydis(addtask({id:Date.now(),Task:val}))
     setval("")
  }

  const recdel=(id)=>{
    mydis(deltask(id))
  }


  const Taskct=(id)=>{
    mydis(workct(id));
    alert("work is now completed")
  }

  const Taskunct=(id)=>{
    mydis(workunct(id))
  }


  const Editdata=(id,Task)=>{
       setval(Task);
      //  setbtn(false)
       setedit(id)
  }


  // const Savedata=(myid,mywork)=>{
  //   mydis(editsave({id:myid,Task:mywork}));
  //   setbtn(true);
  //   setval("")
  // }

  const Savedata = (id, task) => {
    if (task.trim()) {
      mydis(editsave({ id, Task: task }));
      // setbtn(true);
      setval(""); // Clear the input field after saving
      setedit("");
    }
  };




 
  let sno=0;

  const ans = myval.map((key)=>{
    sno++
    return(
      <>
      <tr>
        <td>{sno}</td>
        {/* <td>{key.Task}</td> */}

      <td>
      {key.complete? <span style={{textDecoration:"line-through", color:"red"}}>
      {key.Task}</span> : key.Task }
      </td>
        <td>
          <button onClick={()=>{recdel(key.id)}}>Delete</button>
        </td>

        <td>
          <button onClick={()=>{Taskct(key.id)}}>complete</button>
        </td>

        <td>
          <button onClick={()=>{Taskunct(key.id)}}>Uncomplete</button>
        </td>

        <td>
          <button onClick={()=>{Editdata(key.id,key.Task)}}>Edit</button>
        </td>



        
      </tr>
      </>
    )
  })


  return(
    <>
    
    
    <input type="text"  value={val}  onChange={(e)=>{setval(e.target.value)}}/>
    <button   onClick={Addtask}>Add task</button>
    <button  onClick={()=>{Savedata(edt,val)}}>Editsave</button>


{/* {btn? ( <button onClick={Addtask}>
        Add
      </button>) :(

        <button onClick={()=>{Savedata(edt, val)}}> Edit Save</button>
      ) }
     */}
    <hr    size="4" color="blue"   />

    <table>
      <tr>
        <th>sno</th>
        <th>Task</th>
        <th>Delete</th>
        <th>Complete</th>
        <th>Uncomplete</th>
      
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