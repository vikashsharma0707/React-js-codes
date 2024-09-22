// import { useState } from "react"


// this is the first method here we use disabled attribute 
// const Condition=()=>{


//     const [count,setcount] =useState(0);
//     const [step,setstep]=useState(0)


//     const incre=()=>{
//        setcount(count+step)
//     }

//     const decre=()=>{
//         setcount(count-step)
//      }

//      const rset=()=>{
//         setcount(0)
//      }


//     return(
//         <>
//        <label>
//         <input type="text" value={step} onChange={(e)=>{setstep (Number(e.target.value))}}/>
//        </label>

//          <h1>The Value is : {count}</h1>
//          {/* in button disabled attribute is found */}
//          <button  onClick={incre}  disabled={count>=100}>Increment</button>
//          <button  onClick={decre}   disabled={count<=0}>Decrement</button>
//          <button  onClick={rset}>Reset</button>
        
//         </>
//     )
// }

// export default Condition;

// This is second method for making ternary operator in button
import { useState } from "react"



const Increment=()=>{


    const [count,setcount] =useState(0);


    const incre=()=>{
       setcount(count+1)
    }

    const decre=()=>{
        setcount(count-1)
     }

     const rset=()=>{
        setcount(0)
     }


    return(
        <>
         <h1>The Value is : {count}</h1>
         <button  onClick={count<15? incre :alert("Number should be less than 15")}>Increment</button>
         <button  onClick={count<=0?alert("Number should be greater the 0"): decre}>Decrement</button>
         <button  onClick={rset}>Reset</button>
        
        </>
    )
}

export default Increment

// import { useState } from "react";

// const Increment = () => {
//   const [count, setCount] = useState(0);

//   const incre = () => {
//     setCount(count + 1);
//   };

//   const decre = () => {
//     setCount(count - 1);
//   };

//   const rset = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <h1>The Value is: {count}</h1>
//       {/* Corrected ternary operator */}
//       <button onClick={count < 15 ? incre : null}>Increment</button>
//       <button onClick={decre}>Decrement</button>
//       <button onClick={rset}>Reset</button>
//     </>
//   );
// };

// export default Increment;
