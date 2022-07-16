import "../styles/bio.css";
import ProfilePic from "../resources/profile-pic.jpg";
import { Card } from "../components";

function Bio() {
    return (
        <section className="bio-container" id="bio">
            <div className="bio-container-child">
                <Card>
                    <h1>Kory Brantley</h1>
                    <h2>Software Developer</h2>
                    <div className="bio-description">
                        <p>This is a bio where I would talk about myself and provide a small description of my interests and what I want to pursue in the future.</p>
                    </div>                    
                </Card>
                <div className="profile-pic">
                    <img src={ProfilePic} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Bio;