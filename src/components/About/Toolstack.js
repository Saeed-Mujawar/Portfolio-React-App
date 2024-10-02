import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiRender,
  SiWindows10,
  SiSwagger,
  SiGit,
  SiJira,
  SiDocker,
  SiCelery,
  SiDbeaver,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows10 />
        <h2>Windows</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2>VS Code</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h2>Postman</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <h2>Swagger</h2>
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <h2>GitHub</h2>
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <SiDbeaver />
        <h2>Dbeaver</h2>
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h2>Jira</h2>
      </Col>    
     
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h2>Docker</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCelery />
        <h2>Celery</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
        <h2>Render</h2>
      </Col>
    </Row>
  );
}

export default Toolstack;
