import React from "react";
import "./portfolioprojects.css";
import project from "../../../assets/icons/project.png";
const Portfoliopageprojects = () => {
  return (
    <div className="portfolioprojects_main">
      <h1>PROJECTS</h1>
      <div className="portfolio_allprojects">
        <div className="portfolio_project1">
          <img src={project} alt="icon" />
          <a href="#">
            <h1>MEDIA LANDER</h1>
          </a>
        </div>
        <div className="portfolio_project2">
          <img src={project} alt="icon" />
          <a href="#">
            <h1>SOCIAL NETWORK</h1>
          </a>
        </div>
        <div className="portfolio_project3">
          <img src={project} alt="icon" />
          <a href="#">
            <h1>PORTFOLIO</h1>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Portfoliopageprojects;
