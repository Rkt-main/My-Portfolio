import React from "react";
import "./Expertise.css";
import ExpertiseContent from "./ExpertiseContent";
import bootstrap from "../Assets/bootstrap.png";
import css from "../Assets/css-3.png";
import JavaScript from "../Assets/js.png";
import reactimg from "../Assets/science.png";

const Expertise = () => {
  const Expertise_Data = [
    {
      title: "HTML/CSS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      image: css,
    },
    {
      title: "JavaScript",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      image: JavaScript,
    },
    {
      title: "Bootsrap",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .",
      image: bootstrap,
    },
    {
      title: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .",
      image: reactimg,
    },
  ];

  return (
    <div className="Expertise">
      <div className="Expertise-Background">
        <ExpertiseContent expertisedata={Expertise_Data} />
      </div>
    </div>
  );
};

export default Expertise;
