import "../styles/experience.css";
import { Timeline } from "../components";
import parse from 'html-react-parser';
import CapitalOne from "../resources/experience/capital-one.png";
import experience_json from "../resources/experience.json";
import projects_json from "../resources/projects.json";
import { Card, Project } from "../components";
import { useEffect, useState } from "react";
import { DECK_DERBY_JSON } from "../appConstants";
import { FiGithub } from "react-icons/fi";
import { SiFirebase, SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { DiHeroku, DiMongodb } from "react-icons/di";
import { TbBrandPython } from "react-icons/tb";

var m_names = ['January', 'February', 'March', 
'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December'];

// function ExperienceComponent(props) {
//     var experience = props.experience;
//     const [image, setImage] = useState(null);

//     useEffect(() => {
//         const fetchImage = async () => {
//             try {
//                 const response = await import(`../resources/experience/${experience.image_name}`)
//                 setImage(response.default)
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         fetchImage()
//     }, [experience.image_name])

//     return (
//         <div className="experience-item-container">
//             <div className="experience-image">
//                 <img src={image} />
//             </div>
//             <div className="experience-information-container">
//                 <p className="title">{experience.title}</p>
//                 <p className="subtitle"><p className="hightlighted">{experience.role}</p> - {experience.location}</p>
                
//                 <ul className="description">
//                     {experience.description.map((key) => ( 
//                         <li>{parse(key)}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="branch-bottom hide"><p>{experience.start_date}</p></div>
//         </div>
//     )   
// }

// function Experience() {
//     const getExperiences = () => {
//         console.log(experience_json)
//         return (
//             Object.keys(experience_json).map((key, value) => (
//                 <ExperienceComponent key={key} experience={experience_json[key]} />
//             ))
//         )
//     }

//     var d = new Date();
//     var month_name = m_names[d.getMonth()]; 
//     var year = d.getFullYear();

//     return (
//         <section id="experience">
//             <div className="experience-header-container">
//                 <h1>Experience</h1>
//                 <hr />
//             </div>
//             <div className="experience-container">
//                 {getExperiences()}
//                 <div className="branch-top hide"><p>{month_name} {year}</p></div>
//             </div>
//         </section>
//     )
// }

const technology_mapping = {
    "reactjs": <FaReact key="reactjs" title="ReactJs" />,
    "firebase": <SiFirebase key="firebase" title="Firebase" />,
    "github": <FiGithub key="github" />,
    "nodejs": <FaNodeJs key="nodejs" title="NodeJs" />,
    "mongodb": <DiMongodb key="mongodb" title="MongoDB" />,
    "heroku": <DiHeroku key="heroku" title="Heroku" />,
    "redux": <SiRedux key="redux" title="Redux" />,
    "python": <TbBrandPython key="python" title="Python" />,
    "aws": <FaAws key="AWS" title="AWS" />
}

function FunCard(props) {
    const project = props.project;
    const [image, setImage] = useState();

    const header = [
        <h2 key="work">Fun</h2>,
        <div key="icon"><p>I</p></div>
    ]

    const generateProjects = (project) => {
        var toRet = [];
        project.technologies.forEach(icon => {
            toRet.push(technology_mapping[icon])
        })
        return toRet;
    }

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../resources/projects/${project.image_name}`)
                setImage(response.default)
            } catch (err) {
                console.log(err)
            }
        }

        fetchImage()
    }, [project.image_name])

    return (
        <ExperienceCard header={header}>
            <div className="fun-container">
                <div className="img-container">
                    <img src={image} />
                </div>
                <div className="arrow-connector"></div>
                <div className="project-details-container">
                    <h1>{project.title}</h1>
                    <div className="icon-container">{generateProjects(project)}</div>
                    {/* <p>{project.description}</p> */}
                </div>
            </div>
            
        </ExperienceCard>
    )
}

function ExperienceCard(props) {
    return (
        <div class="today-container">
            <div class="today-container-item-container">
                <div class="item-header">
                    {props.header}
                </div>
                <div class="item-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function ExperienceComponent(props) {
    var experience = props.experience;
    // const [image, setImage] = useState(null);

    // useEffect(() => {
    //     const fetchImage = async () => {
    //         try {
    //             const response = await import(`../resources/experience/${experience.image_name}`)
    //             setImage(response.default)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

    //     fetchImage()
    // }, [experience.image_name])
    const header = [
        <h2 key="work">Work</h2>,
        <div key="icon"><p>I</p></div>
    ]

    return (
        <ExperienceCard header={header}>
            <h1>{experience.title}</h1>
            <h3>{experience.role}</h3>
            <h4>{experience.location}</h4>
            <ul className="bullet-pts">
                {experience.description.map((key) => ( 
                    <li key={key}>{parse(key)}</li>
                ))}
            </ul>
        </ExperienceCard>
    )

    // return (
    //     <div className="experience-item">
    //         <Card className="">
    //             <div className="experience-item-container">
    //                 <div className="experience-image">
    //                     <img src={image} />
    //                 </div>
    //                 <div className="experience-information-container">
    //                     <p className="title">{experience.title}</p>
    //                     <p className="subtitle"><p className="hightlighted">{experience.role}</p> - {experience.location}</p>
                        
    //                     <ul className="description">
    //                         {experience.description.map((key) => ( 
    //                             <li key={key}>{parse(key)}</li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             </div>
    //         </Card>
    //     </div>
    // )
}

function Experience() {

    return (
        <section id="experience">
            <div className="experience-header-container">
                <h1>Today</h1>
                <hr />
            </div>
            <div className="experience-container">
                {<ExperienceComponent experience={experience_json["capital_one"]} />}
                {<FunCard project={projects_json[DECK_DERBY_JSON]}/>}
            </div>
        </section>
    )
}

export default Experience;