import React from 'react'
import Navi from './components/layout/navigation/navi.js';
import HeadG from './components/Head/Head.js';
import Map from './components/Map/Map.js'
import C_From from './components/Contact_Form/C_Form.js'
import Footer from './components/Footer/Footer.js'


export default function Contact() {
  return (
    <div>
        <Navi />
        <HeadG title="Contact Us "/>
        <Map />
        <C_From />
        <Footer />
    </div>
  )
}
