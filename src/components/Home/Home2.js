import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            PERMÍTEME <span className="purple"> PRESENTARME </span> 
            </h1>
            <p className="home-about-body">
               Soy <b className="purple">desarrollador web</b> titulado en <b className="purple">Desarrollo de Aplicaciones Web (DAW)</b>. Me apasiona la tecnología y disfruto enfrentando nuevos retos que me permitan crecer profesionalmente.
              <br />
              <br />Me gusta programar principalmente con
              <i>
                <b className="purple"> JavaScript (React, Node) y PHP,</b> complementadas con <b className="purple"> Firebase, HTML, Tailwind CSS y mySQL</b> para desarrollar aplicaciones completas y escalables.
              </i>
              <br />
              <br />
              Actualmente estoy ampliando mis habilidades aprendiendo <b className="purple">Python</b> y explorando el campo de las
              <i>
                <b className="purple">
                  {" "}
                  automatizaciones con IA,
                </b>
              </i>
              &nbsp; lo que refleja mi interés constante por estar al día con las tecnologías emergentes. Me dedico a desarrollar proyectos web por cuenta propia, aplicando mis conocimientos para crear soluciones efectivas e innovadoras.
             
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ marginTop: "50px" }}>
            <h1 className="project-heading">
            <strong className="purple">Habilidades</strong> Principales
            </h1>
            <Techstack />
          </Col>
        </Row>

        <Row>
          <Col md={12} style={{ marginTop: "50px" }}>
            <h1 className="project-heading">
              <strong className="purple">Herramientas</strong> que utilizo
            </h1>
            <Toolstack />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>REDES SOCIALES</h1>
            <p>
              <span className="purple"><a className= "purple" target= "_blank" href="https://linkedin.com/in/agabrielmhernandez">¡Conectemos!</a></span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Silvergab"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/agabrielmhernandez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
