import Mission from "./Mission Statement/mission";
import "./home.css";
import { React, useState } from "react";

import tree from "../../../assets/img/tree.png";
import fire from "../../../assets/img/fire.png";
import Pie from "../Pie Chart/pie";

export default function Home() {
  const [popup, setPopup] = useState(false);

  document.addEventListener("keydown", function (event) {
    if (popup) {
      if (event.keyCode === 27) {
        setPopup(!popup);
      }
    }
  });
  return (
    <>
      <section data-aos="fade-in" className="mission-statement">
        <div className="container">
          <Mission />
        </div>
      </section>
      <section data-aos="fade-in" className="problem-section">
        <div className="container">
          <div className="problem-area">
            <div className="problem-description">
              <span>Empowering rural India to protect the air</span>
              <br />
              <br />
              Prakrati supplies resources for Indian farmers to repurpose rice
              crop stubble into reliable food sources, reducing smoke pollution
              from burning crops.
              <br />
              <br />
              <div
                className="problem-btn"
                onClick={() => {
                  setPopup(!popup);
                }}
              >
                More Info
              </div>
            </div>
            <img id="tree" src={tree} alt="tree" />
          </div>
        </div>
      </section>
      <div className={popup ? "popup show-popup" : "popup hidden-popup"}>
        <div
          className="exit"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          <div className="x top"></div>
          <div className="x bottom"></div>
        </div>
        <div className="popup-container">
          <div className="popup-description">
            <span>Making India’s air clean one step at a time.</span>
            India is the largest area under rice cultivation in the world,
            harvesting 44.6 Mha annually. Every harvesting season, farmers burn
            fields to clear rice stubble and start wheat production. Although
            burning is illegal and hurts the soil, 84% of farmers aren’t even
            aware of alternatives.
            <br />
            <br />
            Prakriti gives farmers this alternative by providing farmers with
            knowledge and mycelium to grow and reliably sell rice-straw
            mushrooms with crop residue, a solution proven across Vietnam, the
            Philippines, and Cambodia.
          </div>
          <img id="fire" src={fire} alt="fire" />
        </div>
      </div>
      <section>
        <div className="stats-container container">
          <Pie />
          <div className="numbers-container">
            <div className="number-stat">
              <span>$50B</span>Mushroom Market
            </div>
            <div className="number-stat">
              <span>6.5M</span>
              tons of rice stock burned each winter
            </div>
            <div className="number-stat">
              <span>$250M+</span>potential revenue
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
