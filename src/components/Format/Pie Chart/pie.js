import "./pie.css";

export default function Pie() {
  return (
    <div className="pies-containers">
      <div data-aos="fade-in" className="pie-container">
        <div className="outer">
          <div className="inner">
            <div className="number">84%</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          id="pie"
        >
          <defs>
            <linearGradient id="GradientColor1">
              <stop offset="0%" stop-color="var(--green-800)" />
              <stop offset="100%" stop-color="var(--green-400" />
            </linearGradient>
          </defs>
          <circle id="circle1" cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
        <div className="pie-description">
          Of Farmers are Unaware of Alternatives Outside of Burning
        </div>
      </div>
      <div data-aos="fade-in" className="pie-container">
        <div className="outer">
          <div className="inner">
            <div className="number">90%</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          id="pie"
        >
          <defs>
            <linearGradient id="GradientColor2">
              <stop offset="0%" stop-color="var(--green-800)" />
              <stop offset="100%" stop-color="var(--green-400" />
            </linearGradient>
          </defs>
          <circle id="circle2" cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
        <div className="pie-description">
          Of India-Wide Fires are related to Agriculture Fire Emissions
        </div>
      </div>
    </div>
  );
}
