import {Link} from "react-router-dom"

export default function TalentCards(){
    return(
        <>
        <section className="landingPageCTA">
                    <h1>
                        Browse through our catalogue of world class talent
                    </h1>
                    <h2>Looking for work? <Link>Browse jobs</Link></h2>
                    <section className="categories">
                        <Link to="/userlist">Writing and Translation</Link>
                        <Link to="/userlist">Legal</Link>
                        <Link to="/userlist">Engineering and Architecture</Link>
                        <Link to="/userlist">Software development</Link>
                        <Link to="/userlist">IT and networking</Link>
                        <Link to="/userlist">Sales and marketing</Link>
                    </section>
                </section>
        </>
    )
}