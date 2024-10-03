import React from 'react';
import './H_About.style.css';
import { Col, Row ,Container, } from 'react-bootstrap';
import home5 from '../images/Home_about.jpeg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
export default function H_About() {
  // Using the intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animation triggers once
    threshold: 0.3,     // Trigger when 10% of the section is visible
  });
  return (
    <div className='H_About' ref={ref}>
        <Container>
            <Row xs={1} md={2} className='g-3'>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}  // Start animation when in view
              exit={{ x: 300, opacity: 0 }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut" ,
                type: "spring", // Apply spring for more fluid animation
                stiffness: 300,
                damping: 15}}
            >
                <Col>
                  <div className=" about_desc ">
                        <h1 className="in_ah">About Us</h1>
                        <p className="in_ap "> At Paradise Palate, we've been serving up authentic Indian flavors with
                        modern twist for over two decades. Our journey began in Kozhikode, where we've delighted 
                        patrons with our passion for preserving culinary traditions while embracing innovation. 
                        Our menu is a celebration of India's diverse palate, from the fiery south to the aromatic
                        north. We're committed to using the freshest ingredients to create dishes that are not 
                        only delicious but also a true reflection of our culinary heritage. Whether you're a 
                        seasoned foodie or simply looking for a memorable dining experience, Paradise Palate 
                        promises to tantalize your taste buds and leave you craving for more.Today, Paradise  
                        Palate stands as a testament to our unwavering commitment to delivering exceptional dining 
                        experiences that tantalize the senses and leave a lasting impression.</p>
                  </div>
                </Col>
              </motion.div>
              
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}  // Start animation when in view
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring", // Apply spring for more fluid animation
                  stiffness: 300,
                  damping: 10
                }}
                whileHover={{ scale: 1.1 }}  // Scale up on hover
                whileTap={{ scale: 0.9 }}     // Scale down on tap
              >

                <Col>
                    <div >
                      <img className="in_aimg" src={home5} alt="about" />
                    </div>
                </Col>
              </motion.div>

              
            </Row>
        </Container>      
      </div>
  )
}
