import React, { useState } from "react";
import "./HeaderContent.css";
import HeaderForm from "./HeaderForm";

const HeaderContent = () => {
  const [formShow, setFormShow] = useState(false);

  const openFormHandler = () => {
    setFormShow(true);
  };

  return (
    <div className="Header-Content">
      <div className="header-content-left">
        <p>
          <h2>
            <span>R</span>ishabh
          </h2>{" "}
          <h3>
            <span>k</span>umar
          </h3>{" "}
          <h4>
            <span>T</span>iwari
          </h4>
        </p>
        <button className="header-btn" onClick={openFormHandler}>
          Lets Talk
        </button>
      </div>
      {formShow && <HeaderForm />}
    </div>
  );
};

export default HeaderContent;