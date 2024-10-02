import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons">
        <h2>React</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>JavaScript</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>HTML5</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>CSS3</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>Bootstrap</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>FastAPI</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>Python</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>C</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>PostgreSQL</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>SQLAlchemy</h2>
      </Col>     
      <Col xs={5} md={2} className="tech-icons">
        <h2>Alembic</h2>
      </Col>     
      <Col xs={5} md={2} className="tech-icons">
        <h2>Redis</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>Express</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>Node.js</h2>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <h2>MongoDB</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
