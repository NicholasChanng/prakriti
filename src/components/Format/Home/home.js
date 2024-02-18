import Mission from "./Mission Statement/mission";
import "./home.css";
import { React, useState } from "react";

import tree from "../../../assets/img/tree.png";

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
      <section className="mission-statement">
        <div className="container">
          <Mission />
        </div>
      </section>
      <section className="problem-section">
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
      </div>
    </>
  );
}
