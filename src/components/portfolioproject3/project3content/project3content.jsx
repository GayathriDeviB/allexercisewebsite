import React from "react";
import "./project3content.css";
import portfolio1 from "../../../assets/images/portfolio1.gif";
const Project3content = () => {
  return (
    <div className="project3_allcontent">
      <h1>PORTFOLIO</h1>
      <div className="project3content_info">
        <img src={portfolio1} alt="image" />
        <p>
          A strong web portfolio is crucial to a successful career as a web
          developer. Since a web developer’s main job is creating websites and
          applications, an online portfolio will help showcase our technical
          skills and attract potential clients. However, the web development job
          market is highly competitive, so designing an attention-grabbing site
          can be challenging.
        </p>
      </div>
    </div>
  );
};
export default Project3content;
