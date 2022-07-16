import "../../styles/components/timeline.css";
import parse from 'html-react-parser';
import CapitalOne from "../../resources/experience/capital-one.png";

var one = 'Onboarded <p class="hightlighted">50+</p> new programs for the line management decision orchestrator';
var two = 'Oversaw successful release of the streaming application upgrade, from <p class="hightlighted">creation to production</p>';
var three = 'Participated in multiple <p class="hightlighted">internal hackathons</p>, creating an internal networking application and serverless authentication APIs';

var experience_list = { "hi": "there"}
function Timeline() {

    const experience_count = 1;
    const column_count = 3 + (experience_count * 4) + 4;

    const generateExperiences = (experience_list) => {
        // experiences.push(...experiences, experience_pic, experience_description, experience_connection);
        var experiences_dif = Object.keys(experience_list).map((entry) => {
            const [key, value] = entry;
            let experiences = [];
            let experience_pic = 
                <div className="experience-pic">
                    <img src={CapitalOne} />
                </div>
            let experience_description = 
                <div className="experience-description">
                    <p className="title">Capital One</p>
                    <p className="subtitle"><p className="hightlighted">Associate Software Engineer</p> - Richmond, VA</p>
                    <ul className="description">
                        <li>{parse(one)}</li>
                        <li>{parse(two)}</li>
                        <li>{parse(three)}</li>
                    </ul>
                </div>
            let experience_connection = 
                <div className="timeline-connection">
                    <div className="timeline-connection-line">
                    </div>
                </div>
            experiences.push(experience_pic, experience_description, experience_connection);
            return experiences;
        })
            

        return experiences_dif;
    }

    return (
        <div className="timeline-grid-container" style={{ gridTemplateColumns: `repeat(${column_count}, 5vw)` }}>
            <div className="timeline-line">
                <hr />
            </div>
            <div className="timeline-start">
                <p>July 2022</p>
            </div>
            {generateExperiences(experience_list)}
        </div>
    )
}

export default Timeline;