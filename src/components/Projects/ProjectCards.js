import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="project-card-body">
        <div>
          <Card.Title style={{ paddingBottom: "8px", fontSize: "1.3rem" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", paddingBottom: "20px" }}>
            {props.description}
          </Card.Text>

        </div>
        <div>


          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              GitHub
            </Button>
          )}

          {props.ghbLink && (
            <Button variant="primary" href={props.ghbLink} target="_blank">
              <BsGithub /> &nbsp;
              Backend code
            </Button>
          )}
          {props.ghfLink && (
            <Button variant="primary" href={props.ghfLink} target="_blank">
              <BsGithub /> &nbsp;
              Frontend code
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
