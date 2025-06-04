import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Variants for parent UL and child LI
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50, // Alternate left-right
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Github() {
  const items = [
    "Turning ideas into clean, functional code",
    "Late-night sprints with coffee and curiosity",
    "Lo-fi vibes, deep focus, and lines of logic",
    "Debugging with elegance and grit",
    "Writing code—and a story worth remembering",
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col md={12} className="text-center">
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Developer Vibes</strong>
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "650px", margin: "auto" }}>
          I’m a developer who blends logic with flair—coding with purpose and living with passion. Here’s a glimpse into what fuels my journey:
        </p>

        <motion.ul
          style={{ listStyle: "none", padding: 0, fontSize: "1rem", marginTop: "20px" }}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((text, i) => (
            <motion.li key={i} custom={i} variants={itemVariants} style={{ marginBottom: "10px" }}>
              {text}
            </motion.li>
          ))}
        </motion.ul>

        <p style={{ marginTop: "25px", fontSize: "1rem", fontStyle: "italic" }}>
          I'm not just writing programs—I'm building experiences.
        </p>
      </Col>
    </Row>
  );
}

export default Github;
