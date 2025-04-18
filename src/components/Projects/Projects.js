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
        Mis<strong className="purple"> Trabajos </strong>Recientes
        </h1>
        <p style={{ color: "white" }}>
        Aquí tienes algunos de los proyectos en los que he trabajado recientemente:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={queersquadweb}
              isBlog={false}
              title="Queer Squad Web"
              description="Una plataforma comunitaria para la organización LGBT+ Queer Squad, diseñada como alternativa a Meetup. Desarrollada con React, Redux, Firebase y Tailwind CSS, permite a usuarios registrarse, crear y gestionar eventos, así como explorar actividades disponibles en su comunidad. Proyecto actualmente en construcción con características principales implementadas y en proceso de mejora continua."
              ghLink="https://github.com/Silvergab"
              demoLink="https://queersquad-bcn.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portafolio}
              isBlog={false}
              title="Portafolio Personal"
              description="Un portafolio web profesional desarrollado con React.js, mostrando mis proyectos y habilidades técnicas. Cuenta con navegación multi-página, diseño totalmente responsive y estilizado con React-Bootstrap y CSS personalizado. El sitio incluye secciones para proyectos de GitHub, currículum y competencias técnicas, todo desplegado en Vercel para una experiencia de usuario óptima."
              ghLink="https://github.com/Silvergab/portafolio-personal"
              demoLink="portafolio-personal-ten-kappa.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cointracker}
              isBlog={false}
              title="Coin Tracker"
              description="Aplicación web fullstack para monitoreo de criptomonedas desarrollada con JavaScript vanilla, CSS y Express.js. Permite a usuarios autenticados mediante JWT gestionar su portafolio de criptomonedas, registrar transacciones y visualizar ganancias/pérdidas en tiempo real usando la API de CoinGecko."
              ghLink="https://github.com/tuusuario/cointracker"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;