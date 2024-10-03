import React ,{ useEffect } from 'react';
import './facilities.style.css';
import { Col, Row, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';


import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Facilities() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className='facilities'>
      <Container fluid>
        <h1 className="fac_h">Facilities Available</h1>
        <Row xs={1} md={4} className='fac_row g-5' data-aos="zoom-in-up">
          
          {/* Dine-in facility with motion effect */}
          <motion.div
            whileHover={{ scale: 1.1 }}  // Apply hover scale effect to the entire col
            whileTap={{ scale: 0.9 }}    // Apply tap scale effect to the entire col
            transition={{ type: "spring", stiffness: 400, damping: 17 }}  // Spring-like motion
            className='fac_desc'  // Apply motion to fac_desc which includes the border and all content
          >
            <Col>
              <h4 className='fac_dH'>Dine-in</h4>
              <p className="fac_p">
                Enjoy a full-service dining experience with attentive staff.
              </p>
            </Col>
          </motion.div>

          {/* Takeaway facility with motion effect */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className='fac_desc'
          >
            <Col>
              <h4 className='fac_dH'>Takeaway</h4>
              <p className="fac_p">
                Satisfy your cravings effortlessly by placing orders for your preferred 
                dishes and collecting them at your convenience.
              </p>
            </Col>
          </motion.div>

          {/* Takeaway and Delivery facility with motion effect */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className='fac_desc'
          >
            <Col>
              <h4 className='fac_dH'>Takeaway and Delivery</h4>
              <p className="fac_p">
                We offer both dine-in and takeaway options to cater to our customers' 
                diverse preferences.
              </p>
            </Col>
          </motion.div>

        </Row>
      </Container>
    </div>
  );
}
