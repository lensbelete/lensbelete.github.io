import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import { Link } from "react-scroll";
import { FaLink } from "react-icons/fa6";

function Skills() {
    return (
        <Container className="skills-section">
            <h1 className="project-heading">
                <Link to="skills" smooth={true} activeClass="active" offset={50} duration={500} spy={true} >
                    <FaLink />
                </Link>
                &nbsp; <strong className="purple">Skillset </strong>
            </h1>

            <Techstack />

           
        

        
        </Container>
    )
}

export default Skills;