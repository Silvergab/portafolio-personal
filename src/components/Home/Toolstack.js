import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiLinux,
  SiTrello,
  SiNotion,
  SiSlack,
  SiVercel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>

   
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>

      
      <Col xs={4} md={2} className="tech-icons" title="Trello">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Notion">
        <SiNotion />
      </Col>

  
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;