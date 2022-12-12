import React from "react";

import "../Components/HeaderForm.css";

const HeaderForm = () => {
  const sendDataHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Header-form">
      <form>
        <label>First Name</label>
        <input type="text" for="fname" placeholder="Enter First Name" />
        <label>Last Name</label>
        <input type="text" for="lname" placeholder="Enter Last Name" />
        <label>Email</label>
        <input type="text" for="email" placeholder="Enter Email" />
        <button onClick={sendDataHandler}>Send</button>
      </form>
    </div>
  );
};

export default HeaderForm;
