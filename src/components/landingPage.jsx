import NavBar from "./NavBar"
import TalentCards from "./employerComponents/TalentCards"
import Footer from "./employerComponents/Footer"
import { Link } from "react-router-dom"
import cta from "../assets/cta.jpg"
import { useContext } from "react"
import { UserContext } from "../App"

export default function LandingPage(){
    const {user} = useContext(UserContext)
    return (
        <div id="landingPageContainer">
           <NavBar />
            <main>
                <div id="employerContainer" className="dashboard">
                <figure>
                    <img className="heroImage" src={cta} alt="" />
                </figure>
                <section className="employerIntro">
                    <h1>
                        How hiring should work.
                    </h1>
                    <h2>
                        You can now hire the best talent in any given field.
                        We have the best there is out there, right here.
                    </h2>
                    <Link to="/jobform">
                        Get Started
                    </Link>
                </section>
            </div>
                <TalentCards />
                <Footer />
            </main>  
        </div>
    )
}

