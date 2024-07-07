import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profilepic.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <br />
      <br />
      <br />
      <br />
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello Geeks !{" "}
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DEV PRASHAD K</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
            <img
                src={homeLogo}
                alt="home pic"
                class="home-logo img-fluid"  width="500"
                height="300"
                style={{ borderRadius: "25px" }}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
export default Home;
