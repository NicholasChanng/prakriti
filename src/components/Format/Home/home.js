import Mission from "./Mission Statement/mission";
import "./home.css";

import tree from "../../../assets/img/tree.png";

export default function Home() {
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
            </div>
            <img id="tree" src={tree} alt="tree" />
          </div>
        </div>
      </section>
    </>
  );
}
