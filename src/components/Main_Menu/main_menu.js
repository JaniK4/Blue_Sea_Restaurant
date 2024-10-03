import React ,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import samosa from "../images/samosa.jpg";
import vada from "../images/vada.jpg";
import momos from "../images/momos.jpg";
import biryani from "../images/biriyani.jpg";
import naan from "../images/naan.jpg";
import meals from "../images/meals.jpg";
import ChickenCurry from "../images/ChickenCurry.jpg";
import Paneer from "../images/Paneer Tikka.jpg";
import Tandoori from "../images/Tandoori.jpg";
import Gulab from "../images/gulab.jpeg";
import rasgulla from "../images/rasgulla.jpg";
import kulfi from "../images/kulfi.jpg";
import masala from "../images/masala chai.jpg";
import lassi from "../images/lassi.jpg";
import jaljeera from "../images/jaljeera.jpg";


import "./main_menu.css";

const Menu = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000});
    AOS.refresh();
  }, []);
  const menuItems = [
    {
      section: "Starters",
      items: [
        {
          title: "Samosa",
          description: "Crispy pastry filled with spiced potatoes and peas.",
          price: "Rs 5.00",
          imgSrc: samosa,
        },
        {
          title: "Vada",
          description: "Savory lentil fritter, crispy exterior, soft interior.",
          price: "Rs 15.00",
          imgSrc: vada,
        },
        {
          title: "Momos",
          description:
            "Steamed or fried dumplings filled with meat or vegetables.",
          price: "Rs 100",
          imgSrc: momos,
        },
      ],
    },
    {
      section: "Main Course",
      items: [
        {
          title: "Chicken Biryani",
          description: "Aromatic rice dish with tender chicken, fragrant spices.",
          price: "Rs 240",
          imgSrc: biryani,
        },
        {
          title: "Naan",
          description: "Flatbread, often served with butter or garlic.",
          price: "Rs 15",
          imgSrc: naan,
        },
        {
          title: "Meals",
          description: "Varied dishes with vibrant spices, rich and aromatic.",
          price: "Rs 120",
          imgSrc: meals,
        },
        {
          title: "Chicken Curry",
          description: "Spicy chicken stew with aromatic sauce.",
          price: "Rs 260",
          imgSrc: ChickenCurry,
        },
        {
          title: "Paneer Tikka",
          description: "Marinated paneer cubes, grilled to perfection.",
          price: "Rs 350",
          imgSrc: Paneer,
        },
        {
          title: "Tandoori Chicken",
          description: "Marinated chicken, oven-roasted with rich, smoky spices.",
          price: "Rs 540",
          imgSrc: Tandoori,
        },
      ],
    },
    {
      section: "Desserts",
      items: [
        {
          title: "Gulab Jamun",
          description: "Sweet, fried milk balls in rose syrup.",
          price: "Rs 180",
          imgSrc: Gulab,
        },
        {
          title: "Rasgulla",
          description: "Spongy cheese balls in a sugar syrup.",
          price: "Rs 120",
          imgSrc: rasgulla,
        },
        {
          title: "Kulfi",
          description: "Dense, creamy frozen dessert with rich, sweet flavors.",
          price: "Rs 45",
          imgSrc: kulfi,
        },
      ],
    },
    {
      section: "Beverages",
      items: [
        {
          title: "Masala Chai",
          description: "Invigorating blend of tea, milk, and aromatic spices.",
          price: "Rs 40",
          imgSrc: masala,
        },
        {
          title: "Lassi",
          description: "Traditional yogurt-based drink, sweet or salty.",
          price: "Rs 100",
          imgSrc: lassi,
        },
        {
          title: "Jal Jeera",
          description: "Refreshing cumin-flavored water drink.",
          price: "Rs 60",
          imgSrc: jaljeera,
        },
      ],
    },
  ];

  return (
    <div id='menu'>
        <div  className="Container mt-5">
            {menuItems.map((section, index) => (
                <section key={index} id={section.section.toLowerCase().replace(" ", "-")} className="menu-section">
                <h2 className="foodHead">{section.section}</h2>
                <div className="row">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="col-md-4" 
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                      >
                          <div id='menu-item' className="card mb-4 h-70">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <div >
                                <img
                                    className="foodImage card-img-top img-fluid rounded-circle"
                                    src={item.imgSrc}
                                    alt={item.title}
                                />
                                </div>
                                <p className="card-text">{item.description}</p>
                                <p className="card-price">{item.price}</p>
                            </div>
                          </div>
                      </div>
                    ))}
                </div>
            </section>
            ))}
        </div>
    </div>
  );
};

export default Menu;
