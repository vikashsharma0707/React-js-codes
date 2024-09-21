

// this is firts method
// const Destructuring=(props)=>{

//     const {name,message,subject,discription,city} =props;
//     return(
//         <>
//          <h1>{message} {name}</h1>
//          <h1>{subject}</h1>
//          <h1>{discription}</h1>
//          <h1>{city}</h1>
        
//         </>
//     )
// }

// export default Destructuring;


//This is the second method
const Destructuring=({name,message,subject,discription,city})=>{


    return(
        <>
         <h1>{message} {name}</h1>
         <h1>{subject}</h1>
         <h1>{discription}</h1>
         <h1>{city}</h1>
        
        </>
    )
}

export default Destructuring;

// props is immutable 


