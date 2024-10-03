import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Gal from './Gallery';
import Con from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function App() {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallery' element={<Gal />} />
            <Route path='/contact' element={<Con />} />
        </Routes>

    </div>
  )
}
