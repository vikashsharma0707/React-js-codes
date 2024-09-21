


// This is single line event
// const Event=()=>{
//     return(
//         <>
//         <button onClick={()=>alert("good")}>Click here to see the alert message </button>
//         </>
//     )
// }

// export default Event



/*Incorrect: onClick={handledata()} calls the function immediately.
Correct: onClick={handledata} passes the function as a reference to be called when the button is clicked.*/

// This is second method by making function
const Event=()=>{

  const handledata=()=>{
     alert("This is event handling");
  }

  

    return(
        <>
        <button onClick={handledata}>Click here to see the alert message </button>
        </>
    )
}

export default Event