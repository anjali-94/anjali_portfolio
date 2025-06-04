import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMongodb,
} from "react-icons/di";
import {
  SiTypescript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiDjango,
  SiFlask,
  SiBootstrap,
  SiTailwindcss,
  SiWordpress,
  SiApachenetbeanside,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C/C++">
        <CgCPlusPlus />
      </Col>
       <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flask">
        <SiFlask />
      </Col>
       <Col xs={4} md={2} className="tech-icons" title="REST APIs">
        <SiApachenetbeanside />
      </Col>
       <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="WordPress">
        <SiWordpress />
      </Col>

    </Row>
  );
}

export default Techstack;

