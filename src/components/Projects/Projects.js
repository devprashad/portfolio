import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/fall.jpg";
import railway from "../../Assets/Projects/railway.jpg";
import bitsOfCode from "../../Assets/Projects/egg.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Railway Alert System"
              description="Address the critical challenge of railway track trespassing by designing and implementing an effective alert system capable of promptly detecting and notifying authorities about any unauthorized presence, thereby minimizing the risk of accidents and ensuring the safety of individuals and wildlife."
              ghLink="https://github.com/devprashad/human-detection-in-railway-using-openvino.git"            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cracked Egg Detection"
              description="Spotting cracked eggs just got faster and more reliable!  Machine learning is helping automate the sorting process in the food industry, ensuring only the best eggs reach your plate. This technology tackles the limitations of manual inspection, which can be slow and error-prone."
              ghLink="https://github.com/devprashad/CrackedEggDetection.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fall Detection using ESP-32"
              description="I built a fall detection system using an ESP32 microcontroller and MPU sensor. It uses ReactJS for the user interface and FastAPI for data processing."
              ghLink="https://github.com/devprashad/fall-detection-esp32.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
