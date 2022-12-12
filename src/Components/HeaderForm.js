import React, { useState } from "react";

import "../Components/HeaderForm.css";

const HeaderForm = (props) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");

  const fnameHandler = (e) => {
    setfname(e.target.value);
    console.log(e.target.value);
  };

  const lnameHandler = (e) => {
    setlname(e.target.value);
    console.log(e.target.value);
  };

  const emailHanlder = (e) => {
    setEmail(e.target.value);
  };

  const sendDataHandler = (event) => {
    const formData = {
      fname: fname,
      lname: lname,
      email: email,
    };

    setlname("");
    setfname("");
    setEmail("");

    console.log(formData);
    props.onExit();
    alert("Submitted");
    event.preventDefault();
  };

  return (
    <div className="Header-form">
      <form>
        <label>First Name</label>
        <input
          onChange={fnameHandler}
          value={fname}
          type="text"
          for="fname"
          placeholder="Enter First Name"
        />
        <label>Last Name</label>
        <input
          onChange={lnameHandler}
          value={lname}
          type="text"
          for="lname"
          placeholder="Enter Last Name"
        />
        <label>Email</label>
        <input
          onChange={emailHanlder}
          value={email}
          type="text"
          for="email"
          placeholder="Enter Email"
        />
        <button onClick={sendDataHandler}>Send</button>
      </form>
    </div>
  );
};

export default HeaderForm;
