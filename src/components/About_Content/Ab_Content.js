import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import about from '../images/aboyt_res.jpg';
import './Ab_Content.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
export default function Ab_Content() {
     // Using the intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animation triggers once
    threshold: 0.3,     // Trigger when 10% of the section is visible
  });
  return (
    <section className='about_history section_gap' ref={ref}>
        <Container fluid>
            <Row id='About_row' xs={1} md={2}>
                <motion.div
                    initial={{x:-300, opacity: 0 }} // Start 50px above and invisible
                    animate={inView ? { x:0, opacity: 1 } : {}} // Slide down to original position and become visible
                    transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
                >
                    <Col className='d-flex align-items-center'>
                        <div className='about_content'>
                            <h2 class="title ">About Us</h2>
                            <h2 class="title ">And Our History</h2>
                            
                            <p class="text-justify">
                                Blue Sea has been a beloved culinary institution in Kozhikode for over two 
                                decades, captivating taste buds with a harmonious blend of tradition and innovation.
                                Our journey commenced with a fervent desire to showcase the vibrant tapestry of Indian
                                flavors, from the fiery spices of the south to the delicate nuances of the north. Over 
                                the years, we've evolved, incorporating international influences to create a unique 
                                fusion cuisine that resonates with modern palates while honoring our culinary heritage. 
                                Today, Blue Sea stands as a testament to our unwavering commitment to delivering 
                                exceptional dining experiences that tantalize the senses and leave a lasting impression.
                            </p>
                        </div>
                    </Col>
                </motion.div>
                <motion.div
                    initial={{ x: -300, opacity: 0 }} // Start 50px above and invisible
                    animate={inView ? { x: 0, opacity: 1 } : {}} // Slide down to original position and become visible
                    transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
                    whileHover={{ 
                        scale: 1.05,  
                        transition: { 
                          type: 'spring',  // Use spring dynamics
                          stiffness: 300,  // Adjust stiffness
                          damping: 10     // Adjust damping
                        } 
                      }}
                >   
                    <Col className=' Ab_P'>
                        <img className='aboutPic' src={about} alt="about" />
                    </Col>
                </motion.div> 
            </Row>
        </Container>
    </section>
  )
}
