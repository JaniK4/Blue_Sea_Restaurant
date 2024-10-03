import React from 'react'
// import { Col, Container ,Row} from 'react-bootstrap'
import './Footer.style.css';
// import face from '../images/2141637_circle_facebook_high quality_long shadow_media_icon.png';
// import linked from '../images/2141633_circle_high quality_linkedin_long shadow_media_icon.png';
// import insta from '../images/1164349_circle_instagram_logo_media_network_icon.png'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div class="footer">
        <div class="Container-fluid">     
            <div id='row' class="row">                       
                <div class="col-lg-3 col-sm-4 col-xs-12">
                    <div class="single_footer">
                        <h4>About Us</h4>
                        <p class="in_ap"> Our menu invites you on a diverse culinary journey, showcasing the 
                          vibrant and aromatic world of Indian cuisine. Each dish, crafted with fresh, high-quality
                          ingredients, captures the essence of rich Indian flavors and spices.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                    <div class="single_footer single_footer_address">
                        <h4>Navigation Links</h4>
                        <ul>
                            <li><a href='/'> Home</a></li>
                            <li><a href='/about'> About Us</a></li>
                            <li><a href='/menu'> Menu</a></li>
                            <li><a href='/gallery'> Gallery</a></li>
                            <li><a href='/contact'> Contact Us</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-4 col-xs-12">
                    <div class="single_footer">
                        <h4>Address</h4>
                        <p class="in_ap">Paradise Palate
                            45/B, Mahatma Gandhi Road, Near Kozhikode Post Office
                            Kozhikode, 673001</p> <br></br>
                        <p class="=i_ap">Kerala, India</p>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-sm-4 col-xs-12">
                    <div class="single_footer">
                        <h4>Services</h4>
                        <ul>
                            <li><p class="i_ap">Dine-in</p></li>
                            <li><p class="i_ap">Takeaway</p></li>
                            <li><p class="i_ap">Delivery</p></li>
                            <li><p class="i_ap">+91782345677</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='copy' class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                    <p class="copyright">Copyright © 2024 JK  .</p>
                </div>               
            </div>
            


            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className="social_profile">
                      <ul>
                        <li><a href="https://www.facebook.com">
                        {/* <FacebookRoundedIcon className="social-icon" /> */}
                        {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                          <FaFacebookF />
                        </a></li>
                        <li><a href="https://www.linkedin.com">
                            <FaLinkedinIn />
                            {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                          </a></li>
                        <li><a href="https://www.instagram.com">
                          <FaInstagram />
                          {/* <FontAwesomeIcon icon={faInstagram} /> */}
                        </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


        </div>
    </div>
  )
}
