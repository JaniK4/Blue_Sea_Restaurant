import React from 'react';
import './Head.style.css';
import arrow from '../images/icons8-right-arrow-50.png'

export default function Heading_A({ title }) {
  return (
    <div class="ab_pic">
        <div class="Container-fluid">
            <div class=" about_desc ">
              <h2 class="ab_h text-center">{title}</h2>
              <div className="breadcrumb">
                <h5 className='homeA'><a href='/'> Home</a></h5>
                <img className="arrow" src={arrow} alt='ar' /> 
                <span > <h5 className="current-page">{title}</h5> </span>
              </div>
            </div>
        </div>
    </div>
  )
}
