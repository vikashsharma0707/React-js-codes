import { useContext } from "react"
import Usercontext from "../Context/Usercontext"


const Profile=()=>{

    const {user}= useContext(Usercontext)
    return(
        <>
        <h1>profile :{user.username}</h1>
        </>
    )
}

export default Profile