import NavBar from "./NavBar";
import "../cards.css"

export default function Cards(){
    return(
        <>
            <NavBar />
            <section id="cardContainer">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </section>
        </>
    )
}