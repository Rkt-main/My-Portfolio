import React from "react";
import "../Components/NavList.css";
import logo from "../Assets/1658324091888.jpg";

const NavList = () => {
  return (
    <div className="nav-list">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-list-items">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>EXPERIENCE</a>
        </li>
        <li>
          <a>CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
