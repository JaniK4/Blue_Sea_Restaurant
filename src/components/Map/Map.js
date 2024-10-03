import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Map.css';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

export default function Map() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true, 
  // });
  useEffect(()=>{
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      {/* <motion.div
        ref={ref} // Apply the ref to the motion div for the intersection observe
        initial={{ opacity: 0 }} // Start above and invisible
        animate={inView ? { opacity: 1 } : {}} // Animate into view when inView is true
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      > */}
        <div className="responsive-map-Container" 
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          // try framer motion here
        >
          <iframe
            className="C_Map"
            title="Saffrom Restaurant"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31305.854594000077!2d75.76344741083982!3d11.244349499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65992cc86d743%3A0x2c1b85326f1e743a!2sSalkara%20Restaurant!5e0!3m2!1sen!2sin!4v1723529921573!5m2!1sen!2sin"
            width="1000"
            height="550"
            allowFullScreen // Correct property for full screen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Correct spelling of referrerPolicy
          ></iframe>
        </div>
      {/* </motion.div> */}
    </div>
  );
}
