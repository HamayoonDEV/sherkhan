import React from "react";
import "./Contect.css";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contect = () => {
  return (
    <div className="content">
      <h1>Contect Me</h1>

      <div className="icons">
        <a href="https://instagram.com/sherkhankhosa0?igshid=OGQ5ZDc2ODk2ZA==">
          <InstagramIcon className="icon" />
        </a>
        <a href="mailto:Sherkhankhosa0@gmail.com">
          <MailIcon className="icon" />
        </a>
        <a href="tel:+923433982078">
          <LocalPhoneIcon className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contect;
