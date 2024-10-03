import React, { useEffect } from 'react';
import { Card, Col, Row, Container} from 'react-bootstrap';
import './H_Menu.style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';
import home1 from '../images/home_menu1.jpeg';
import home2 from '../images/home_menu2.webp';
import home3 from '../images/home_menu3.webp';
import home4 from '../images/jaljeera.jpg';

const cardData = [
    {
      imgSrc: home1,
      title: 'Trending Meals',
      buttonText: 'View Menu',
    },
    {
      imgSrc: home2,
      title: 'Fusion Food',
      buttonText: 'View Menu',
    },
    {
      imgSrc: home3,
      title: 'Snacks',
      buttonText: 'View Menu',
    },
    {
      imgSrc: home4,
      title: 'Beverages',
      buttonText: 'View Menu',
    },
];

export default function H_Menu() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div id='menu_card'>
      <h1 className='mc_h'>Menu</h1>        
      <Container fluid>
        <Row xs={1} md={4} className="g-4" id="men_c">
          {cardData.map((card, idx) => (
            <Col key={idx} className='h_col'>
              <Card className='HCard' data-aos="zoom-out-down">
                <Card.Img id='MenuH_Image' className='card-img-top mx-auto img-fluid' variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Title className='m_Title'>{card.title}</Card.Title>
                  {/* material ui button */}
                  <Button variant="contained" href="/Menu" className='VH_menu'>
                    <span className='VH_btn'>View Menu</span>
                  </Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
