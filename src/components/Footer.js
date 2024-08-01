import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row className="footer-content">
        <Col md="4" className="footer-about">
          <h3>Lensa Belete</h3>
          <p>Software Engineer | Developer | Innovator</p>
         
        </Col>
       
        <Col md="4" className="footer-rights">
          <h3>© {year}</h3>
          <p>All rights reserved.</p>
        </Col>
        <Col md="4" className="footer-social">
          <h3>Contact Info.</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/lensbelete"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/lensa-belete-7148aa1a6/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/lensbelete"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/lensbelete/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/lensbelete"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
          </ul>
          <ul className="footer-contacts">
            <li>
              <FaEnvelope /> <a href="mailto:lensbelete@gmail.com.com">lensbelete@gmail.com</a>
            </li>
            <li>
              <MdLocationOn /> Addis Ababa, Ethiopia
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
