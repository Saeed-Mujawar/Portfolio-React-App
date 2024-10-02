import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import portfolio from "../../Assets/Projects/portfolio.png";
import snakeGame from "../../Assets/Projects/snakeGame.png";
import transactionManagement from "../../Assets/Projects/transactionManagement.png";
import ticTacToe from "../../Assets/Projects/ticTacToe.png";
import whatsappDm from "../../Assets/Projects/whatsappDM.png";
import bookportal from "../../Assets/Projects/bookPortalApp.png";
import contactManagement from "../../Assets/Projects/contactManagementApp.png";

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
              imgPath={bookportal}
              title="Book Portal App"
              description={
                <>
                  An inclusive API built with FastAPI that enables users to manage books, reviews, and tags efficiently. This application provides a secure and robust platform with various functionalities for both users and administrators.
                  
                  <br /><br />
                  
                  (Initial loading may take up to 2 min. due to free hosting)
                </>
              }
              
              ghLink="https://github.com/Saeed-Mujawar/book-review-api"
              demoLink="https://book-review-api-k7hl.onrender.com/docs"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transactionManagement}
              title="Transaction Management App"
              description={
                <>
                  Our application is designed to make tracking your financial transactions a breeze. Whether you’re managing personal expenses or monitoring income, our user-friendly platform helps you keep everything organized. With our app, you can effortlessly categorize and record each transaction, making it simple to review your financial history and stay on top of your budget. Experience a streamlined approach to financial management designed to meet your everyday needs.
          
                  <br /><br />
          
                  (Initial loading may take up to 2 min. due to free hosting)
                </>
              }              ghfLink="https://github.com/Saeed-Mujawar/finance-management-app-frontend"
              ghbLink="https://github.com/Saeed-Mujawar/finance-management-app-backend"
              demoLink="https://finance-management-app-frontend.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactManagement}
              title="Contact Management App"
              description={
                <>
                  A robust backend API built with Node.js, Express.js, and MongoDB that enables efficient management of contact 
                  information. This application supports various operations for creating, reading, updating, and deleting contacts. 
                  
                  <br /><br />
                  
                  (Initial loading may take up to 2 min. due to free hosting)
                </>
              }
              ghLink="https://github.com/Saeed-Mujawar/contact-management-apis"
              demoLink="https://contact-management-app-rtck.onrender.com/docs"
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
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsappDm}
              title="WhatsApp DM Redirector"
              description="A React application that enables users to send messages to WhatsApp numbers not saved in their contacts directly from a web interface. Users can enter phone numbers, and the app seamlessly redirects to WhatsApp with a single click, while also maintaining a history of all redirected numbers."
              
              ghLink="https://github.com/Saeed-Mujawar/whatsapp-dm-redirector"
              demoLink="https://saeed-mujawar.github.io/whatsapp-dm-redirector/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
