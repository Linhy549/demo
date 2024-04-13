import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out best offer today!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/nail-1.png"
              text="Various Nail Colors"
              // label='Adventure'
              // path='/services'
            />
            <CardItem
              src="images/nail-2.jpg"
              text="Nail treament"
              // label='Luxury'
              // path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/nail-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              // label='Mystery'
              // path='/services'
            />
            <CardItem
              src="images/nail-spa.png"
              text="Experience Football on Top of the Himilayan Mountains"
              // label='Adventure'
              // path='/products'
            />
            <CardItem
              src="images/nail-wax.png"
              text="Ride through the Sahara Desert on a guided camel tour"
              // label='Adrenaline'
              // path='/sign-up'
            />
          </ul>
        </div>

        <div className="mapSec">
          {/* <div className="locationInfo">
            98 Wolf Rd. #2, Albany, NY 12205
            <br />
            TEL (518) 435 - 1115
            <br />
            Opening Hours Mon-Sat:10:00am-8:00pm Sun: 0:30am-6:00p
          </div>

          <div className="busHr">
            Opening Hours Mon-Sat:10:00am-8:00pm Sun: 0:30am-6:00pm
          </div> */}

          <div className="googleMap">
            <iframe
              className="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.20925286738168!2d-73.81328910621802!3d42.71752357339014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0c9970ad6fb5%3A0x1820e3765b92ca49!2s96%20Wolf%20Rd%20Unit%209%2C%20Colonie%2C%20NY%2012205!5e0!3m2!1sen!2sus!4v1710542205091!5m2!1sen!2sus"
              width="400"
              height="350"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
