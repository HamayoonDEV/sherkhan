import React from "react";
import "./Home.css";

import sherkhan from "../images/sherkhan.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="image">
        <img src={sherkhan} />
      </div>
      <div className="about">
        <h1>Welcome to Sher Khan Designs</h1>
        <p>
          I'm Sher Khan,
          <br />a graphic designer with a knack for creating memorable logos,
          <br />
          banners, and business cards.
          <br /> Every design I make is crafted with care and attention,
          <br />
          ensuring your brand shines bright.
          <br /> Browse through my work to see how I can bring your ideas to
          life.
          <br /> Let's make something great together.
        </p>
      </div>
    </div>
  );
};

export default Home;
