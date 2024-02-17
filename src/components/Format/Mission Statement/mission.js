import "./mission.css";
import FadeInSection from "../../experiment"
import React from "react";

export default function Mission() {
  return (
    <div className="container1">
        <div className="mission-cont">
            <FadeInSection>
                <h1 className="textM">
                    <strong>Our Mission</strong>
                </h1>
                <p className="textM">
                    Yap Yap Yap
                </p>
            </FadeInSection>
        </div>
            <FadeInSection>
                <img className="mushImg" src="mush.gif" alt="mush" />
            </FadeInSection>
        </div>
  );
}