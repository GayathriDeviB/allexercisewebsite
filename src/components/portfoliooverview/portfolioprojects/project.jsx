import React from "react";
import "./project.css";
import add from "../../../assets/images/add.png";
import projicon1 from "../../../assets/icons/projicon1.jpg";
import projicon2 from "../../../assets/icons/projicon2.jpg";
import projicon3 from "../../../assets/icons/projicon3.png";
const Portfolioproject = () => {
  return (
    <div className="project_main">
      <div className="proj_info">
        <button>Media Lander</button>
        <button>Social Network</button>
        <button>Portfolio</button>
        <button>
          <img src={add} alt="add.png" />
          Add Project
        </button>
      </div>
      <div className="projects">
        <div className="project1">
          <img src={projicon1} alt="image" />
          <h3>MEDIA LANDER</h3>
          <p>
            To create a well-designed signin and login page using html code and
            css for social media platform, make it access successfully using
            javascript and to close that page.
          </p>
        </div>
        <div className="project2">
          <img src={projicon2} alt="image" />
          <h3>SOCIAL NETWORK</h3>
          <p>
            To create a home page for creating a new account using html code,
            chat pages and its functionalities design it using css, run it with
            the help of js and also close that page.
          </p>
        </div>
        <div className="project3">
          <img src={projicon3} alt="image" />
          <h3>PORTFOLIO</h3>
          <p>
            To create a simple personal profile which includes my basic
            information related to education,the projects I did, using html
            code, adding some styles using css and get into that by clicking any
            option using js.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Portfolioproject;
