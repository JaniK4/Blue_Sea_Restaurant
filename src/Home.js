import Navi from './components/layout/navigation/navi.js';
import Carou from './components/carousel/Carou.js';
import HMenu from './components/Home_Menu/H_Menu.js'
import Faci from './components/Facilities/facilities.js';
import Test from './components/Testimonials/testimonials.js';
import HAbout from './components/Home_About/H_About.js';
import Foot from './components/Footer/Footer.js'



import './Home.css';


function App() {
  return (
    <div className="Home" >
      <Navi />
      <Carou />
      <HMenu />
      <HAbout />
      <Faci />
      <Test />

      <Foot />
     


     
    </div>
  );
}

export default App;
