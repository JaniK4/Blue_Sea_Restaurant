import React from 'react';
import Navi from './components/layout/navigation/navi.js';
import HeadG from './components/Head/Head.js';
import R_Gal from './components/gal_comp/gal.js';
import Footer from './components/Footer/Footer.js';




export default function Gallery() {
  return (
    <div>
        <Navi />
        <HeadG title="Gallery"/>
        <R_Gal />
        
        <Footer />
    </div>
  )
}
