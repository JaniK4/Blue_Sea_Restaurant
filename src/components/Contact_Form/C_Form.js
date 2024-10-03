import React from 'react'
import { Col, Row } from 'react-bootstrap';

import "./C_Form.css"

export default function C_Form() {
  return (
    <div className='con_div'>
        <div id='contact' className='container-fluid'>
            <h1 className='Contact_H'>Contact Us</h1>
            <Row xs={1} md={2}>
                <Col id='address' class="d-flex justify-content-center">
                    <ul class="con_main">
                        <li><h5 class="con_h">Address</h5></li>
                        <li class="address">Restaurant Blue Sea
                            45/B, Mahatma Gandhi Road
                            Corner of Tali Road and Mahatma Gandhi Road
                            Near Kozhikode Post Office
                            Opposite the New Bus Stand
                            Kozhikode City,
                            Kerala State, 673001
                            India
                        </li> 
                        <br></br>
                        <li><h5 class="con_h">+91 9496136916</h5></li> 
                        <li className='ad_con'>+91 9496136933</li> 
                        <br></br>
                        <li><h5 class="con_h">contact@Blue Searestaurant.com</h5></li>
                        <li className='ad_con'>info@Blue Searestaurant.com</li>
                        <li className='ad_con'>reservations@Blue Searestaurant.com</li>    
                    </ul>
                </Col>
                <Col >
                    <div id="forms" className="d-flex justify-content-center ">
                        <form name="registration" >
                            <div className="form-floating mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control form-outline"
                                id="name"
                                placeholder="Name"
                                name="name"
                            />
                            <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3 mt-3">
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="Phone No"
                                name="phone"
                            />
                            <label htmlFor="phone">Phone No</label>
                            </div>

                            <div className="form-floating mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                name="email"
                            />
                            <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-3 mt-3">
                            <textarea
                                id="gfg"
                                className="form-control"
                                style={{ height: '200px' }}
                                placeholder="Message"
                                name="message"
                            />
                            <label htmlFor="gfg">Your Message</label>
                            </div>

                            <div className="sub-btn form-floating mb-3 mt-3">
                            <button type="submit" className="btn btn-primary" style={{ width: 'max-content' }}>
                                Submit
                            </button>
                            </div>
                        </form>
                    </div> 
                </Col>
            </Row>
        </div>
    </div>
  )
}
