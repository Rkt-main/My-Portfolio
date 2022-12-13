import React, { useState } from "react";
import "../NewsLetter/NewsLetterForm.css";
import newsletter from "../Assets/newsletter (1).png";
import scissor from "../Assets/scissors.png";

const NewsLetterForm = (props) => {
  return (
    <div className="news-letter-form">
      <div className="news-letter-exit">
        <img onClick={props.onExit} src={scissor} alt="Scissor" />
      </div>
      <div className="newsletter-image">
        <img src={newsletter} alt="newsletter" />
      </div>
      <h2>Newsletter</h2>
      <p>Stay up to date with our latest news and products</p>

      <div className="newsletter-controls">
        <input type="text" placeholder="Your email address" />
        <button>SUBSCRIBE</button>
      </div>

      <p className="news-letter-desc">
        Your email is safe with us, we don't spam
      </p>
    </div>
  );
};

export default NewsLetterForm;
