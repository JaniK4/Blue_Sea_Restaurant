import React from 'react'
import Navi from './components/layout/navigation/navi.js';
import HeadM from './components/Head/Head.js';
import M_Menu from './components/Main_Menu/main_menu.js';
import Footer from './components/Footer/Footer.js';

import './Menu.css'

export default function Menu() {
  return (
    <div id='menu'>
        <Navi />
        <HeadM title="Our &nbsp; Menu" />
        <M_Menu />
        <Footer />
    </div>
  )
}
