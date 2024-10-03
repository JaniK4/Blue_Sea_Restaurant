import React ,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './gal.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Image imports
import img1 from '../images/res1.jpg';
import img2 from '../images/res2.jpg';
import img3 from '../images/jaljeera.jpg';
import img4 from '../images/res3.jpg';
import img5 from '../images/res4.jpg';
import img6 from '../images/res4.webp';
import img7 from '../images/res5.jpg';
import img8 from '../images/res6.jpg';
import img9 from '../images/res7.jpg';
import img10 from '../images/res8.jpg';
import img11 from '../images/res9.webp';
import img12 from '../images/Paneer Tikka.jpg';
import img13 from '../images/biriyani.jpg';
import img14 from '../images/naan.jpg';
import img15 from '../images/Tandoori.jpg';
import img16 from '../images/lassi.jpg';
import img17 from '../images/gulab.jpeg';
import img18 from '../images/masala chai.jpg';

// Array of images
const images = [
  img1, img2, img3, img6, img7, img9, img4, img5, img8, img17, img10,
  img11, img12, img13, img14, img15, img16, img18,
];

const Gallery = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
    AOS.refresh();
  },[]);

  // Using useInView to detect when the component is in view

  return (
    <Container fluid>
  
        <Row className="justify-content-center gal_con" 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        >
          <h1 className="gal_h">Gallery</h1>
          {images.map((image, index) => (
            <Col key={index} xs={4} sm={3} md={2} lg={2} className="p-2">
              <motion.div
                whileHover={{ scale: 1.1 }} // Slight zoom on hover
                className="image-wrapper"
                style={{ overflow: 'hidden', borderRadius: '20px' }}
              >
                <img
                  className='gal_img'
                  src={image}
                  alt={`img-${index}`}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Ensure images fit uniformly
                />
              </motion.div>
            </Col>
          ))}
        </Row>

    </Container>
  );
};

export default Gallery;
