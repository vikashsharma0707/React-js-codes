



const Arrayrendering=()=>{

    const Fruits =["apple","orange","apple","mango","pineapple"];

    const display= Fruits.map((key)=>{
          return(
            <>
             {/* <h1>{key}</h1> */}
             <li>{key}</li>
            </>
          )
    })
    return(
        <>
            <div>
                {display}
            </div>
        </>
    )
}
export default Arrayrendering;