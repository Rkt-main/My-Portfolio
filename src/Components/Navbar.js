import React from "react";
import "./Navbar.css";
import NavContact from "./NavContact";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavList />
      <NavContact />
    </div>
  );
};

export default Navbar;
