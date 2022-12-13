import React, { useState } from "react";
import "./NewsLetter.css";
import NewsLetterForm from "./NewsLetterForm";

const NewsLetter = () => {
  const [NewsForm, setNewsForm] = useState(false);

  const openNewsLetterForm = () => {
    setNewsForm(true);
  };

  const closeNewsForm = () => {
    setNewsForm(false);
  };

  return (
    <div className="News-letter">
      <div className="newsletter-content">
        <h1>Subscribe</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting
        </p>
        <button onClick={openNewsLetterForm} className="news-btn1">
          Subscribe now
        </button>
      </div>

      <div className="newsletter-background">
        {NewsForm && <NewsLetterForm onExit={closeNewsForm} />}
      </div>
    </div>
  );
};

export default NewsLetter;
