import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3 style={{ textAlign: "justify" }}>
            Heyy Everyone, I am <span className="purple">Dev Prashad </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am currently completing my final year 
            of a <span className="purple">Bachelor of Technology (B.Tech.) </span>
            degree in <span className="purple">Computer Science</span> at <span className="purple"> Amrita University.</span>
          </h3>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
