import "../styles/about.css";
import { Card, Project } from "../components";
import projects from "../resources/projects.json";
import { BALANCE_ME_JSON, DECK_DERBY_JSON, GUIDING_SCIENCE_JSON } from "../appConstants";

function About() {
    var guiding_science_project = projects[GUIDING_SCIENCE_JSON];
    var balance_me_project = projects[BALANCE_ME_JSON];
    var deck_derby_project = projects[DECK_DERBY_JSON];

    return (
        <section className="about-container" id="about">
            <Card className="about-container-card">
                <h1>About</h1>
                <hr></hr>
                <p>
                    I love coding and creating personal projects that service both myself and also those around me. The technology that I strive to create are ones that become ubiquitous to those who use it. My passion is in creating programs and software that gets used by people from all over for an extensive set of possibilities. I have always had my heart set on doing something that gets used by people, that's so easy to use that the extensive background work that went into creating a technology is barely even noticed by the user because it is that easy to use.
                </p>
                <p>
                    Highlighted Projects:
                </p>
                <div className="projects-container inner">
                    <Project project={guiding_science_project} className="highlighted-project"/>
                    <Project project={balance_me_project} className="highlighted-project"/>
                    <Project project={deck_derby_project} className="highlighted-project"/>
                </div>
            </Card>
            <div className="projects-container outer">
                <Project project={guiding_science_project} className="highlighted-project"/>
                <Project project={balance_me_project} className="highlighted-project"/>
                <Project project={deck_derby_project} className="highlighted-project"/>
            </div>
        </section>
    )
}

export default About;