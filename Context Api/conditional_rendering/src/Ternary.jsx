import Condition from "./Condition";
import Component from "./Component";

// conditional rendering
// const Ternary=()=>{


//     const isTrue=true;
//     return(
//         <>
        
//           {isTrue? "good":"notgood"}
         
//         </>
//     )
// }
// export default Ternary


const Ternary=()=>{


    const isTrue=true;
    return(
        <>
        
          {isTrue? <Condition/>:<Component/>}
         
        </>
    )
}
export default Ternary