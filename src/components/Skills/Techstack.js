import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiAngularSimple,
  DiBootstrap,
  DiDart
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiFlutter,
  SiMysql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>

     

      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
      </Col>


      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      
  


      <Col xs={4} md={1} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiBootstrap />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiDart />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiJava />
      </Col>

    

      <Col xs={4} md={1} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <SiMysql />
      </Col>
   


    </Row>
  );
}

export default Techstack;
