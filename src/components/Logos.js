import React from "react";
import "./Logos.css";
import L1 from "../images/L-1.jpeg";
import L2 from "../images/L-2.jpeg";
import L3 from "../images/L-3.jpeg";
import L4 from "../images/L-4.jpeg";
import L5 from "../images/L-5.jpeg";
import L6 from "../images/L-6.jpeg";

const Logos = () => {
  return (
    <div className="logos">
      <h1>The Art of First Impressions: Dive into My Logo Creations</h1>
      <div className="Portrait">
        <a href={L1} target="blank">
          <img src={L1} />
        </a>
        <a href={L2} target="blank">
          <img src={L2} />
        </a>
        <a href={L3} target="blank">
          <img src={L3} />
        </a>
        <a href={L4} target="blank">
          <img src={L4} />
        </a>
        <a href={L5} target="blank">
          <img src={L5} />
        </a>
        <a href={L6} target="blank">
          <img src={L6} />
        </a>
      </div>
    </div>
  );
};

export default Logos;
