import React from 'react'
import Navi from './components/layout/navigation/navi.js';
import HeadA from './components/Head/Head.js';
import AbContent from './components/About_Content/Ab_Content.js';
import Faci from './components/Facilities/facilities.js'
import Footer from './components/Footer/Footer.js';

export default function About() {
  return (
    <div>
        <Navi />
        <HeadA title="About Us" />
        <AbContent />
        <Faci />
        <Footer />

    </div>
  )
}
