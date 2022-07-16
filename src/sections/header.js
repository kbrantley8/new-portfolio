import "../styles/header.css";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

function Header() {
  return (
    <div className="header-container">
        <header className="nav-container">
            <ol className="icons">
                <a target="_blank" href="https://github.com/kbrantley8" rel="noreferrer"><FiGithub /></a>
                <a target="_blank" href="www.linkedin.com/in/kory-brantley" rel="noreferrer"><FiLinkedin /></a>
                <a target="_blank" href="https://www.facebook.com/kory.brantley" rel="noreferrer"><FiFacebook /></a>
            </ol>
            <ol className="nav">
                <a href="/#about">About</a>
                <a href="/#experience">Experience</a>
                <a href="/#projects">Projects</a>
                <a href="/#skills">Skills</a>
            </ol>
        </header>
        <div className="header-initials">
            <a href="/#bio">KB</a>
        </div>
    </div>
  );
}

export default Header;
