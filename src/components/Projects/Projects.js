import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cointracker from "../../Assets/Projects/cointracker.png";
import portafolio from "../../Assets/Projects/portafolio.jpg";
import queersquadweb from "../../Assets/Projects/queersquadweb.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent </strong>Works
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={queersquadweb}
              isBlog={false}
              title="Queer Squad Web"
              description="A community platform for the LGBT+ organization Queer Squad, designed as an alternative to Meetup. Built with React, Redux, Firebase and Tailwind CSS, it allows registered users to create and manage events, as well as explore available activities in their community. Currently under development with core features implemented and undergoing continuous improvement."
              ghLink="https://github.com/Silvergab"
              demoLink="https://queersquad-bcn.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portafolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A professional web portfolio developed with React.js, showcasing my projects and technical skills. Features multi-page navigation, fully responsive design styled with React-Bootstrap and custom CSS. The site includes sections for GitHub projects, resume, and technical skills, all deployed on Vercel for optimal user experience."
              ghLink="https://github.com/Silvergab/portafolio-personal"
              demoLink="https://portafolio-personal-ten-kappa.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cointracker}
              isBlog={false}
              title="Coin Tracker"
              description="Fullstack web application for cryptocurrency tracking built with vanilla JavaScript, CSS and Express.js. Allows JWT-authenticated users to manage their crypto portfolio, record transactions, and visualize profits/losses in real-time using the CoinGecko API."
              ghLink="https://github.com/Silvergab/coin-tracker"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;