import "./mission.css";
import FadeInSection from "../../experiment"
import React from "react";

export default function Mission() {
  return (
    <div className="container1">
        <div className="mission-cont">
            <FadeInSection>
                <h1 className="textM">
                    <strong>Green Fields, Clear Skies: Empowering Growth & Feeding the Future.</strong>
                </h1>
            </FadeInSection>
        </div>
            <FadeInSection>
                <img className="mushImg" src="mush.gif" alt="mush" />
            </FadeInSection>
        </div>
  );
}