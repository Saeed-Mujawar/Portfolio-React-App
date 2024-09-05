import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import portfolio from "../../Assets/Projects/portfolio.png";
import snakeGame from "../../Assets/Projects/snakeGame.png";
import transactionManagement from "../../Assets/Projects/transactionManagement.png";
import ticTacToe from "../../Assets/Projects/ticTacToe.png";


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
              imgPath={transactionManagement}
              title="Transaction Management App"
              description="Our application is designed to make tracking your financial transactions a breeze. Whether you’re managing personal expenses or monitoring income, our user-friendly platform helps you keep everything organized. With our app, you can effortlessly categorize and record each transaction, making it simple to review your financial history and stay on top of your budget. Experience a streamlined approach to financial management designed to meet your everyday needs."
              ghfLink="https://github.com/Saeed-Mujawar/finance-management-app-frontend"
              ghbLink="https://github.com/Saeed-Mujawar/finance-management-app-backend"
              demoLink="https://finance-management-app-frontend.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToe}
              title="Tic-Tac-Toe Game"
              description="A Tic-Tac-Toe game built with React, featuring a clean and intuitive user interface. The game supports two-player mode and includes functionalities such as game resetting, score tracking, and win condition detection. This project highlights my skills in managing state and handling user interactions in a React environment."
              ghLink="https://github.com/Saeed-Mujawar/tic-tac-toe-react-app"
              
              demoLink="https://saeed-mujawar.github.io/tic-tac-toe-react-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              title="Snake Game"
              description="An engaging Snake game developed using React. This project features responsive controls, dynamic difficulty, and a scoring system. It demonstrates my ability to implement game logic, handle animations, and manage real-time user input in a React application."
              
              ghLink="https://github.com/Saeed-Mujawar/snake-game-react-app"
              demoLink="https://saeed-mujawar.github.io/snake-game-react-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio Website"
              description="A personal portfolio website developed using React to showcase my projects, skills, and professional experience. The site features a modern, responsive design with interactive components, including project highlights, a contact form, and a blog section. It demonstrates my ability to build dynamic, user-friendly web applications and showcases my work effectively."
              
              ghLink="https://github.com/Saeed-Mujawar/Portfolio-React-App"
              demoLink="https://saeed-mujawar.github.io/Portfolio-React-App/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
