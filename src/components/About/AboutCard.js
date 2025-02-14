import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-color-light">Lensa Belete </span>
            from <span className="primary-color-light"> Addis Ababa, Ethiopia.</span>
            <br />
            I am a fifth-year software engineering student at Addis Ababa University (AAIT), passionate about creating innovative solutions through code. My studies have provided me with a solid foundation in programming and development, enabling me to work on Web development projects. I constantly seek to learn new technologies and apply them in real-world scenarios.
            <br />
           
         
          </p>
     
      

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
