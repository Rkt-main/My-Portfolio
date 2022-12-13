import React from "react";
import "./ExpertiseContent.css";

const ExpertiseContent = (props) => {
  return (
    <div className="Expertise-content">
      <h2 className="ex-heading"> Expertise</h2>
      <hr className="ex-divider"/>
      <div className="ex-content-all">
        {props.expertisedata.map((items) => {
          return (
            <div className="ex-content">
              <div className="ex-logo">
                <img src={items.image} />
              </div>
              <h2>{items.title}</h2>
              <div>
                <p>{items.description}</p>
                <button>Look Projects</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertiseContent;
