import "../../styles/components/project-small.css";
import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { SiFirebase, SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { DiHeroku, DiMongodb } from "react-icons/di";
import { TbBrandPython } from "react-icons/tb";

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

function Project(props) {
    const project = props.project;
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [githubHover, setGithubHover] = useState("");

    const generateProjects = (project) => {
        var toRet = [];
        project.technologies.forEach(icon => {
            toRet.push(technology_mapping[icon])
        })
        return toRet;
    }

    const handleOpen = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
        setGithubHover("");
    }

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../resources/projects/${project.image_name}`)
                setImage(response.default)
            } catch (err) {
                console.log(err)
            }
        }

        fetchImage()
    }, [project.image_name])

    const handleOnHoverGithub = (link) => {
        if (githubHover !== "") {
            setGithubHover("");
        } else {
            setGithubHover(project.github_link[link]);
        }
    }

    return (
        <div className={`project-wrapper ${props.className}`}>
            <img onClick={() => handleOpen()} src={image} alt=""/>
            <div className="text-container">
                <div className="text">
                    <h1>{project.title}</h1>
                </div>
                <div className="technology-container">
                    {generateProjects(project)}
                </div>
                <div className="description-container">
                    <p>
                        {project.description}
                    </p>
                </div>
                <p className="read-more">{"Read more..."}</p>
            </div>
            <Modal show={show} onHide={() => handleClose()}>
                <Modal.Body>
                    <div className="modal-header-container">
                        <div className="modal-header">
                            <div className="red-dot" onClick={() => handleClose()}></div>
                            <div className="yellow-dot" onClick={() => handleClose()}></div>
                            <div className="green-dot"></div>
                        </div>
                        <div className="modal-title">
                            <p>{project.title}</p> 
                        </div>
                    </div>
                    <div className="modal-background">
                        <img src={image} alt=""/>
                    </div>
                    <div className="modal-content-text-container">
                        <div className="modal-content-text">
                            <div className="first-half">
                                <img src={image} alt=""/>
                                <div className="technology-container">
                                    {generateProjects(project)}
                                </div>
                            </div>
 
                            <div className="second-half">
                                <p>
                                    {project.description}
                                </p>
                                <div className="bottom-bar">
                                    <div onClick={() => handleClose()} className="show-less">
                                        <p>
                                            ← show less
                                        </p>
                                    </div>
                                    {project.github_link && 
                                        <div className="links-container">
                                            {Object.keys(project.github_link).map((link, value) => ( 
                                                <div key={value} className="link">
                                                    <a onMouseEnter={() => handleOnHoverGithub(link)} onMouseLeave={() => handleOnHoverGithub(link)} target="blank" href={link}>
                                                        {technology_mapping["github"]}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </div>
                                {githubHover &&
                                    <div className="github-url-container">
                                        <div className="github-url">   
                                            <p>{githubHover}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Project;