import React from "react";
import "../Components/NavContact.css";
import git from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";

const NavContact = () => {
  return (
    <div className="nav-contact-list">
      <div className="contact-logo">
        <img src={git} />
        <a>Github</a>
      </div>
      <div className="contact-logo">
        <img src={instagram} />
        <a>Instagram</a>
      </div>
      <div className="contact-logo">
        <img src={linkedin} />
        <a>Linkedin</a>
      </div>
    </div>
  );
};

export default NavContact;
