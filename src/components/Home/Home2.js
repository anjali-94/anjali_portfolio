import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Hello! I'm <b className="purple">Anjali Sharma</b>, a dedicated and results-driven <b className="purple">Full-Stack Developer</b> with a strong academic foundation in <b className="purple">Electronic Science</b> and a Master’s degree in <b className="purple">Informatics</b> from the University of Delhi.
                <br />
                <br />
                I specialize in building scalable, secure, and user-centric web applications using modern technologies.
                <br />
                <br />
                From developing AI-integrated platforms to designing intuitive user experiences, I aim to create impactful digital solutions that solve real-world problems. I’m also passionate about <b className="purple">data analysis</b>, <b className="purple">software architecture</b>, and delivering projects that blend performance with innovation.
                <br />
                <br />
                Whether it's streamlining research workflows, predicting health risks, or building women-focused safety platforms, I bring creativity, structure, and a deep commitment to quality in everything I build.
              </p>
            </motion.div>
          </Col>

          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="image" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/anjali-94"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:anjalishr987@gmail.com"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/anjali-sharma-08a835249/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/anjali.sharma_03"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
