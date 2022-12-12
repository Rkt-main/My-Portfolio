import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-background">
        <Navbar />
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;
