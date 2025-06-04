import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Framer Motion
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import document from "../../Assets/Projects/Document.png";
import whackAmole from "../../Assets/Projects/whack_a_mole.png";
import naari from "../../Assets/Projects/Naari.png";
import Ecommerce from "../../Assets/Projects/E-commerce.png";
import ScholAuxil from "../../Assets/Projects/ScholAuxil.png";
import Diabetes from "../../Assets/Projects/Diabetes.png";

// Define reusable animation variants
const variants = {
  left: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  center: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
};

// Create motion-enhanced Col component
const MotionCol = motion(Col);

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* First Row */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <MotionCol
            md={4}
            className="project-card"
            variants={variants.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              imgPath={ScholAuxil}
              isBlog={false}
              title="ScholAuxil"
              description="Built a full-stack research aid platform using Firebase, Flask, and React+TypeScript. Integrated citation tools, AI chatbot, plagiarism checker, repository system, and smart To-Do list, offering secure access and seamless, responsive user experience for scholars."
              ghLink="https://github.com/anjali-94/scholarAuxil"
            />
          </MotionCol>
          <MotionCol
            md={4}
            className="project-card"
            variants={variants.center}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              imgPath={naari}
              isBlog={false}
              title="Naari"
              description="Designed a women-focused safety and awareness platform using Django. Implemented scalable backends, optimized database queries, integrated APIs, and built responsive interfaces to ensure informative, dynamic, and engaging user experiences."
              ghLink="https://github.com/anjali-94/Project-naariiii"
            />
          </MotionCol>
          <MotionCol
            md={4}
            className="project-card"
            variants={variants.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              imgPath={Diabetes}
              isBlog={false}
              title="Diabetes Predictor"
              description="Created a personalized diabetes risk assessment tool using React and Flask. Integrated ML models with Scikit-learn and TensorFlow, added data visualizations, and improved page load speed by 25% to boost user engagement and retention."
              ghLink="https://github.com/anjali-94/Diabetes-prediction"
            />
          </MotionCol>
        </Row>
        {/* Second Row */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <MotionCol
            md={4}
            className="project-card"
            variants={variants.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              imgPath={document}
              isBlog={false}
              title="AI Document Verification"
              description="Developed an AI-based system to verify documents like Aadhaar, passports, and marksheets for authenticity. Ensured secure processing and accurate validation to combat document forgery in a streamlined, automated manner."
              ghLink="https://github.com/anjali-94/Document-verification-system"
            />
          </MotionCol>
          <MotionCol
            md={4}
            className="project-card"
            variants={variants.center}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              imgPath={whackAmole}
              isBlog={false}
              title="Gamified Portfolio"
              description="Developed a 3D interactive portfolio using Three.js, JavaScript, and HTML/CSS. Enhanced user engagement with gamified visuals, smooth rendering, and intuitive interactions, resulting in a 25% improvement in user interaction."
              ghLink="https://github.com/anjali-94/whack-a-mole_gamified_portfolio"
            />
          </MotionCol>
          <MotionCol
            md={4}
            className="project-card"
            variants={variants.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-commerce website"
              description="Built a fully responsive e-commerce platform with advanced search, filters, and optimized product catalog. Enhanced accessibility across devices and reduced page load times by 25%, boosting conversion rates and user satisfaction."
              ghLink="https://github.com/anjali-94/Ecommerce-website"
            />
          </MotionCol>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;