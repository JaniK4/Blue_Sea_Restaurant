import Carousel from 'react-bootstrap/Carousel';
import './carou.style.css';
import car2 from '../images/car2.webp'
import car3 from '../images/car3.webp'
import car4 from '../images/car4.webp'

export default function Carousels() {
    return (
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img className='Carousel_image' src={car2} alt='car2' />
          <div className="centered">
                <h1 className='carTitle'>
                    Blue Sea
                </h1 >
                <p className='carDesc'>Savor the legacy of authentic Indian flavors.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='Carousel_image' src={car3} alt='car2' />
          <div className="centered">
                <h1 className='carTitle'>
                    Blue Sea
                </h1 >
                <p className='carDesc'>Savor the legacy of authentic Indian flavors.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='Carousel_image' src={car4} alt='car2' />
          <div class="centered">
                <h1 className='carTitle'>
                    Blue Sea
                </h1 >
                <p className='carDesc'>Savor the legacy of authentic Indian flavors.</p>
          </div>
        </Carousel.Item>
        
      </Carousel>
    )
  }
  