


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

  const handledata=(event)=>{
    console.log(event)
    console.log(event.target)
    console.log(event.value)
     alert("This is event handling");
  }

// backtick is used to make the variable dynamic
  const handle=(user)=>{
      console.log(`welcom to ${user} class`)
  }

  

    return(
        <>
        <button onClick={handledata}>Click here to see the alert message </button>
        <br/><br/>
        <button onClick={(event)=>{handledata(event)}}>Click here to see the alert message </button>
        <br/><br/>

         {/* pass the argumenet and parameter with the help of arrow function */}
        <button onClick={()=>{handle("react js")}}>Click here</button>
        </>
    )
}

export default Event