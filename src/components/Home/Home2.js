import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/deve.gif";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            
            <p className="home-about-body">
                I am an undergraduate student with a strong background in <b className="purple">Full Stack Development</b> and with experience in both front-end and back-end development.
                <br />
                <br />
                I also possess <b className="purple"> Machine Learning </b> experience, having been a finalist in an <b className="purple">Intel AI hackathon.</b>
              <br />
              <br />I am proficent in 
              <i>
                <b className="purple"> Python</b> and <b className="purple">MYSQL</b>
              </i>
              <br />
              <br />
              My passion lies in problem-solving and competitive programming, and I possess proficiency in <b className="purple">Python</b> programming language.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width="500" height="500"
              style={{ borderRadius: "20px" }}
                />
            </Tilt>
          </Col>
        </Row>
        <Row> 
          <Col md={12} className="home-about-social">
            <h1>REACH ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devprashad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dev-prashad-708138224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
