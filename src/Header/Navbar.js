import React from "react";
import "./Navbar.css";
import NavContact from "./NavContact";
import NavList from "./NavList";

const Navbar = () => {
const navbarscroll = React.createRef();

// const navbarscroll = () =>{

// }

  return (
    <div className="Navbar">
      <NavList ref={navbarscroll} />
      <NavContact />
    </div>
  );
};

export default Navbar;
