
import React from "react";
import Slider from "react-slick";
import { Col, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// import { baseUrl } from "./config";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Projects() {

  // const baseUrl = "../../Assets/Projects"

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };
  return (
    <Container className="project-section">
      <div className="slider project-container">
      
        <Col className="project-card">
        <ProjectCard
              isBlog={false}
              title="Malawi and Ethiopian eService Projects"
              description="Designed and implemented modern UI components using mantine and Tailwind CSS
Worked with GitLab to manage collaborative efforts."
      />
      
          </Col>
          
          <Col className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Album List"
              description="Built a responsive album list app with React and Redux for efficient state management.



Developed a simple backend with Go to handle data storage and retrieval.

"
          
            />
          </Col>
          <Col className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Database Designer"
              description="Built a responsive front end with Next.js and Redux for efficient state management.



Styled the interface using Tailwind CSS and Mantine for a modern look.



Collaborated with backend teams to integrate APIs and ensure seamless functionality."
           
            />
          </Col>

    
        
          

    
      </div>

    </Container>
  );
}

export default Projects;