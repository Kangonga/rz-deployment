import { useState } from "react"
import EmployerProfile from "./EmployerProfile"
import UserProfile from "./UserProfile"

export default function Profile(){
    const [isEmployer,setIsEmployer] = useState(true)
    return(
        <section id="profilePage">
        {isEmployer?<EmployerProfile/>:<UserProfile/>}
        </section>
    )
}