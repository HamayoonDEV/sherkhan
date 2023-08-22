import React from "react";
import "./Potrates.css";
import p1 from "../images/p-1.jpeg";
import p2 from "../images/p-2.jpeg";
import p3 from "../images/p-3.jpeg";
import p4 from "../images/p-4.jpeg";
import p5 from "../images/p-5.jpeg";
import p6 from "../images/p-6.jpeg";
import p7 from "../images/p-7.jpeg";

const Potrates = () => {
  return (
    <div className="potrates">
      <h1>Freshly Crafted Portraits: Dive into My Latest Creations</h1>
      <div className="Portrait">
        <a href={p1} target="blank">
          <img src={p1} />
        </a>
        <a href={p2} target="blank">
          <img src={p2} />
        </a>
        <a href={p3} target="blank">
          <img src={p3} />
        </a>
        <a href={p4} target="blank">
          <img src={p4} />
        </a>
        <a href={p5} target="blank">
          <img src={p5} />
        </a>
        <a href={p6} target="blank">
          <img src={p6} />
        </a>
        <a href={p7} target="blank">
          <img src={p7} />
        </a>
      </div>
    </div>
  );
};

export default Potrates;
