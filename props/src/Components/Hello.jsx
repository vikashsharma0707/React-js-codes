


const Hello=(props)=>{


    return(
        <>
        <h1>  Hello {props.name} {props.message}</h1>
        <h1> Subject: {props.subject}</h1>
        <h1> Discription: {props.discription}</h1>
        <h1>  City: {props.city}</h1>
        
        </>
    )
}

export default Hello;