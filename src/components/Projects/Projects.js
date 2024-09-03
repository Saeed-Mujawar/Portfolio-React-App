import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={chatify}
              title="Transaction Management App"
              description="Our application is designed to make tracking your financial transactions a breeze. Whether you’re managing personal expenses or monitoring income, our user-friendly platform helps you keep everything organized. With our app, you can effortlessly categorize and record each transaction, making it simple to review your financial history and stay on top of your budget. Experience a streamlined approach to financial management designed to meet your everyday needs."
              ghfLink="https://github.com/Saeed-Mujawar/finance-management-app-frontend"
              ghbLink="https://github.com/Saeed-Mujawar/finance-management-app-backend"
              demoLink="https://finance-management-app-frontend.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Transaction Management App"
              description="Our application is designed to make tracking your financial transactions a breeze. Whether you’re managing personal expenses or monitoring income, our user-friendly platform helps you keep everything organized. With our app, you can effortlessly categorize and record each transaction, making it simple to review your financial history and stay on top of your budget. Experience a streamlined approach to financial management designed to meet your everyday needs."
              ghfLink="https://github.com/Saeed-Mujawar/finance-management-app-frontend"
              ghbLink="https://github.com/Saeed-Mujawar/finance-management-app-backend"
              demoLink="https://finance-management-app-frontend.onrender.com/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
