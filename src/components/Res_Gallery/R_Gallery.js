import React from 'react';
import './R_Gallery.css';

import gal1 from '../images/res1.jpg';
import gal2 from '../images/res2.jpg';
import gal3 from '../images/res4.webp';
import gal4 from '../images/res4.jpg';
import gal5 from '../images/res3.jpg';
import gal6 from '../images/res9.webp';
import gal7 from '../images/res5.jpg';
import gal8 from '../images/res7.jpg';
import gal9 from '../images/res8.jpg';
import gal10 from '../images/Tandoori.jpg';
import gal11 from '../images/res1.jpg';
import gal12 from '../images/home_dark.jpg';

const images = [
  gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12
];

export default function R_Gallery() {
  return (
    <div className="gallery-Container">
      <h1 className='gal_h'>Gallery</h1>
      <div className="Container">
        <div className="row">
          {images.map((src, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="gallery-item">
                <img src={src} alt={`Gallery item ${index + 1}`} className="img-fluid zoom"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
