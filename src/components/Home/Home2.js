import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">web developer</b> with a degree in <b className="purple">Web Application Development (DAW)</b>. I'm passionate about technology and enjoy tackling new challenges that help me grow professionally.
              <br />
              <br />I specialize in programming with
              <i>
                <b className="purple"> JavaScript (React, Node) and PHP,</b> complemented by <b className="purple"> Firebase, HTML, Tailwind CSS, and mySQL</b> to develop complete, scalable applications.
              </i>
              <br />
              <br />
              I'm currently expanding my skills by learning <b className="purple">Python</b> and exploring the field of
              <i>
                <b className="purple">
                  {" "}
                  AI automation,
                </b>
              </i>
              &nbsp; reflecting my constant drive to stay current with emerging technologies. I develop web projects independently, applying my knowledge to create effective, innovative solutions.
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
              <strong className="purple">Core</strong> Skills
            </h1>
            <Techstack />
          </Col>
        </Row>

        <Row>
          <Col md={12} style={{ marginTop: "50px" }}>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I Use
            </h1>
            <Toolstack />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SOCIAL NETWORKS</h1>
            <p>
              <span className="purple"><a className="purple" target="_blank" href="https://linkedin.com/in/agabrielmhernandez">Let's connect!</a></span>
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